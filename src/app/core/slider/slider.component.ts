import { Component, OnInit } from '@angular/core';
import { NgxSiemaOptions, NgxSiemaService } from 'ngx-siema';
import { SliderService } from './slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  sliderItems: object = [];
  optionsSlider: NgxSiemaOptions = {
    selector: '.slider',
    duration: 500,
    easing: 'ease-out',
    perPage:1,
    startIndex: 0,
    draggable: true,
    threshold: 20,
    loop: true
  };
  constructor(private ngxSiemaService: NgxSiemaService,
    private service: SliderService
    ) {
  }


  ngOnInit() {
    this.sliderItems = this.service.items;
  }
  prev() {
    this.ngxSiemaService.prev(1, '.slider')
  }

  next() {
    this.ngxSiemaService.next(1, '.slider')
  }

}
