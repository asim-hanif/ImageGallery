import { ImageGalleryService } from './../image-gallery.service';
import { Image } from './../image';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.css']
})
export class GalleryViewComponent implements OnInit {

  filesForView: Image[][] = [];

  constructor(private _imageGalleryService: ImageGalleryService) {
    this.filesForView = this.setFilesForView(this._imageGalleryService.imagesDb.images);
  }

  ngOnInit() {

  }

  setFilesForView(images: Image[]) {
    let filesForView: any[][] = [];
    for (let i = 0; i < images.length; i++) {
      let subArray: any[] = [];
      for (let j = 0; j < 6; j++) {
        images[i] && subArray.push(images[i])
        i++;
      }
      filesForView.push(subArray);
    }
    return filesForView;
  }
}