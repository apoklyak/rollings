import { Injectable } from '@angular/core';
import {galleryItems} from './galleryItems';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  items: object = [];

  constructor() {
    this.items = galleryItems;
  }
}
