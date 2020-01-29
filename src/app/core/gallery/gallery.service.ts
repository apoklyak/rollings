import { Injectable } from '@angular/core';
import {galleryItems} from '../../enums/gallery.data';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  items: object = [];

  constructor() {
    this.items = galleryItems;
  }
}
