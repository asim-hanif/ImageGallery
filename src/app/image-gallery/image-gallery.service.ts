import { ImagesDb } from './image';
import { Injectable } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class ImageGalleryService {

  constructor() { }

  get imagesDb(): ImagesDb {
    let imagesDb: any = {};
    let maxId = JSON.parse(localStorage.getItem('maxId'));
    let images: any[] = [];
    for (let i = 1; i <= maxId; i++) {
      let img = JSON.parse(localStorage.getItem(String(i)));
      img && images.push(img);
    }
    if (maxId && images.length) {
      imagesDb.maxId = maxId;
      imagesDb.images = images;
    }
    imagesDb = maxId && images.length ? imagesDb : new ImagesDb();
    return imagesDb;
  }

  set imagesDb(imagesDb: ImagesDb) {
    let maxId = JSON.parse(localStorage.getItem('maxId'));
    for(let i=1 ; i<= maxId; i++)
    {
      localStorage.removeItem(String(i));
    }
    for (let i = 0; i < imagesDb.images.length; i++) {
      try {
        localStorage.setItem(String(imagesDb.images[i].id), JSON.stringify(imagesDb.images[i]));
        localStorage.setItem('maxId', JSON.stringify(imagesDb.images[i].id));
      }
      catch (e) {
        alert('local storage is full. ' + String(i) + ' item(s) were added to local storage');
        break;
      }
    };
  }
}