import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GalleryComponent } from './gallery.component';
import { NgxSiemaModule } from 'ngx-siema';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { GalleryService } from './gallery.service';


@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    NgxSiemaModule.forRoot(),
    FontAwesomeModule,
  ],
  providers: [
    GalleryService
  ],
  exports: [
    GalleryComponent
  ]
})
export class GalleryModule { }
