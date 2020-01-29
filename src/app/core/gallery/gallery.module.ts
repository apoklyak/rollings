import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GalleryComponent } from './gallery.component';
import { NgxSiemaModule } from 'ngx-siema';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    NgxSiemaModule.forRoot(),
    FontAwesomeModule,
  ],
  providers: [],
  exports: [
    GalleryComponent
  ]
})
export class GalleryModule { }
