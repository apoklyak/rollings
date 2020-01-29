import { Injectable } from '@angular/core';
import {sliderItems} from './sliderItems';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  items: object = [];

  constructor() {
    this.items = sliderItems;
  }
}
