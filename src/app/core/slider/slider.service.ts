import { Injectable } from '@angular/core';
import {sliderItems} from '../../enums/slider.data';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  items: object = [];

  constructor() {
    this.items = sliderItems;
  }
}
