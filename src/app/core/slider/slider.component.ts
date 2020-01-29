import { Component} from '@angular/core';
import { NgxSiemaOptions, NgxSiemaService } from 'ngx-siema';
import { Input } from '@angular/core';
import { SliderItem } from '../types/slider.interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input() items: SliderItem[];
  @Input() options: NgxSiemaOptions;

  constructor(private ngxSiemaService: NgxSiemaService) {}

  onPrev() {
    this.ngxSiemaService.prev(1, this.options.selector);
  }

  onNext() {
    this.ngxSiemaService.next(1, this.options.selector);
  }
}
