import { ImageGalleryService } from './../image-gallery.service';
import { ImagesDb, Image } from './../image';
import { Component, OnInit } from '@angular/core';
import * as fileTools from 'angular-file/file-upload/fileTools';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-view',
  templateUrl: './upload-view.component.html',
  styleUrls: ['./upload-view.component.css']
})
export class UploadViewComponent implements OnInit {
  maxSize: number = 1048576 * 3; // 3mb
  validComboDrag: boolean;
  galleryImages: Image[] = [];
  imagesDb: ImagesDb = new ImagesDb();
  filesForView: any [][];

  private _files: any[] = [];
  constructor(private _imageGalleryService: ImageGalleryService, private _router: Router) { }

  ngOnInit() {
  }
  set files(images: any[]) {
    if (images.length){
      this.filesForView = this.setFilesForView(images);      
      this.saveImages(images);
    }
    this._files = images;
  }

  get files() {
    return this._files
  }

  saveImages(images: any[]) {
    this.imagesDb = this._imageGalleryService.imagesDb;
    images.forEach((image, index) => fileTools.dataUrl(image).then(src => this.addImageToQueue(image, src)));
  }

  addImageToQueue(img, src) {
    let newImage = this.createImage(src, img);
    this.galleryImages.push(newImage);
  }

  addImagesToGallery() {
    this.imagesDb.images = [...this.imagesDb.images , ...this.galleryImages];
    this._imageGalleryService.imagesDb = this.imagesDb;
    this._router.navigateByUrl('/GalleryView');
  }

  createImage(src, img): Image {    
    let newImage: Image = new Image();
    newImage.base64EncodedValue = src;
    newImage.createDate = img.lastModifiedDate;
    newImage.id = ++this.imagesDb.maxId;
    newImage.name = img.name;
    return newImage;
  }

  setFilesForView(files: any[]) {
    let filesForView: any[][] = [];
    for (let i = 0; i < files.length; i++) {
      let subArray: any[] = [];
      for(let j=0; j<6; j++)
      {
        files[i] && subArray.push(files[i])        
        i++;
      }
      filesForView.push(subArray);
    }
    return filesForView;
  }
}

