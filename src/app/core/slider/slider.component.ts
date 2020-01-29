import { Component, OnInit } from '@angular/core';
import { NgxSiemaOptions, NgxSiemaService } from 'ngx-siema';
import { Input } from '@angular/core';
import { SliderItem } from '../types/slider.interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() items: SliderItem[];

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

  constructor(private ngxSiemaService: NgxSiemaService) {  }


  ngOnInit() {
  }
  prev() {
    this.ngxSiemaService.prev(1, '.slider');
  }

  next() {
    this.ngxSiemaService.next(1, '.slider');
  }

}
