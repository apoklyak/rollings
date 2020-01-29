import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { NgxSiemaModule } from 'ngx-siema';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
 


@NgModule({
  declarations: [SliderComponent],
  imports: [
    CommonModule,
    NgxSiemaModule.forRoot(),
    FontAwesomeModule,
  ],
  providers: [
  ],
  exports: [
    SliderComponent
  ]
})
export class SliderModule { }
