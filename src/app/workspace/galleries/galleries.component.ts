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
  public sliderItems: SliderItem[] = slider.items;
  public sliderOptions: SliderOptions = slider.options;
  public galleryItems: SliderItem[] = gallery.items;
  public galleryOptions: SliderOptions = gallery.options;
}
