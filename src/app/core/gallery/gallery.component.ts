import { Component, OnInit } from '@angular/core';
import { NgxSiemaOptions, NgxSiemaService } from 'ngx-siema';
import { Input } from '@angular/core';
import { SliderItem } from '../types/slider.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() items: SliderItem[];
  
  options: NgxSiemaOptions = {
    selector: '.siema',
    duration: 200,
    easing: 'ease-out',
    perPage: {
      300: 1,
      800: 4
    },
    startIndex: 0,
    draggable: true,
    threshold: 20,
    loop: true
  };
  constructor(private ngxSiemaService: NgxSiemaService) {  }

  ngOnInit() {    
  }
  galleryprev() {
    this.ngxSiemaService.prev(1, '.siema')
  }
  gallerynext() {
    this.ngxSiemaService.next(1, '.siema')
  }  
}
