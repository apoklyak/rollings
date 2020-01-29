import { Component, OnInit } from '@angular/core';
import {sliderItems} from '../../enums/slider.data';
import {galleryItems} from '../../enums/gallery.data';
import { SliderItem } from '../../core/types/slider.interface';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss']
})
export class GalleriesComponent implements OnInit {
  sliderItems: SliderItem[];
  galleryItems: SliderItem[];
  constructor() { }

  ngOnInit() {
    this.sliderItems = sliderItems;
    this.galleryItems = galleryItems;
  }

}
