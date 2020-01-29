import { Component, OnInit } from '@angular/core';
import {slider} from '../../enums/slider.data';
import {gallery} from '../../enums/gallery.data';
import { SliderItem, SliderOptions } from '../../core/types/slider.interface';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss']
})
export class GalleriesComponent  {
  sliderItems: SliderItem[] = slider.items;
  sliderOptions: SliderOptions = slider.options;
  galleryItems: SliderItem[] = gallery.items;  
  galleryOptions: SliderOptions = gallery.options;
  constructor() { }
}
