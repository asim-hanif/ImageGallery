import { forEach } from '@angular/router/src/utils/collection';
import { ImageGalleryService } from './../image-gallery.service';
import { ImagesDb } from './../image';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-zoom-view',
  templateUrl: './zoom-view.component.html',
  styleUrls: ['./zoom-view.component.css']
})
export class ZoomViewComponent implements OnInit {
  imagesDb: ImagesDb;
  imageSrc: string;
  imageId: number;
  constructor(private _imageGalleryService: ImageGalleryService, private _activatedRoute: ActivatedRoute, private _router: Router) {
    this.imagesDb = this._imageGalleryService.imagesDb;
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params: Params) => {
      this.imageId = params['id'];
      let image = this.imagesDb.images.find(img => this.imageId == img.id);
      this.imageSrc = image ? image.base64EncodedValue : ``;
    })
  }

  previousImage() {
    if (this.imageId == 1)
      return;
    this._router.navigateByUrl(`/ZoomView/` + (this.imageId - 1))
  }
  nextImage() {
    if (this.imageId == this.imagesDb.maxId)
      return;
    this._router.navigateByUrl(`/ZoomView/` + (Number(this.imageId) + 1))

  }
  deleteImage() {
    let index = this.imagesDb.images.findIndex(img => img.id == this.imageId);
    this.imagesDb.images.splice(index, 1);
    this.imagesDb.maxId--;
    this.imagesDb.images.forEach((img, index) => img.id = index + 1)
    this._imageGalleryService.imagesDb = this.imagesDb;
    this._router.navigateByUrl(`/ZoomView/` + (Number(this.imageId) + 1))
  }
}
