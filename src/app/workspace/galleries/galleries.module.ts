import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GalleriesComponent } from './galleries.component';
import { GalleriesRoutingModule } from './routing.module';
import { GalleryModule } from '../gallery/gallery.module';
import { SliderModule } from '../slider/slider.module';


@NgModule({
  declarations: [
    GalleriesComponent
  ],
  imports: [
    CommonModule,
    GalleriesRoutingModule,
    GalleryModule,
    SliderModule
  ]
})
export class GalleriesModule { }
