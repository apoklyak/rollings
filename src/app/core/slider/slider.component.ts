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
  @Input() options: NgxSiemaOptions;

  constructor(private ngxSiemaService: NgxSiemaService) {  }

  ngOnInit() {
  }
  prev() {
    this.ngxSiemaService.prev(1, this.options.selector);
  }

  next() {
    this.ngxSiemaService.next(1, this.options.selector);
  }

}
