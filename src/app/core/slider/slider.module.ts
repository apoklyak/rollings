import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { NgxSiemaModule } from 'ngx-siema';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { SliderService } from './slider.service';
 


@NgModule({
  declarations: [SliderComponent],
  imports: [
    CommonModule,
    NgxSiemaModule.forRoot(),
    FontAwesomeModule,
  ],
  providers: [
    SliderService
  ],
  exports: [
    SliderComponent
  ]
})
export class SliderModule { }
