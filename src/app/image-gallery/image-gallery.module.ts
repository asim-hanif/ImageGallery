import { ImageGalleryService } from './image-gallery.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes, Router } from '@angular/router';

import { ngfModule } from "angular-file"

import { GalleryViewComponent } from './gallery-view/gallery-view.component';
import { ZoomViewComponent } from './zoom-view/zoom-view.component';
import { UploadViewComponent } from './upload-view/upload-view.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ngfModule,
    RouterModule,
  ],
  declarations: [GalleryViewComponent, ZoomViewComponent, UploadViewComponent],
  providers: [ImageGalleryService],
})
export class ImageGalleryModule { }
