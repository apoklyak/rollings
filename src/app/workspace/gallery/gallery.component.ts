import { Component, OnInit } from '@angular/core';
import { NgxSiemaOptions, NgxSiemaService } from 'ngx-siema';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  sliderItems: object = [];
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
  constructor(private ngxSiemaService: NgxSiemaService,
    private galleryService: GalleryService
    ) {
  }


  ngOnInit() {
    this.sliderItems = this.galleryService.items;
  }
  galleryprev() {
    this.ngxSiemaService.prev(1, '.siema')
      .subscribe((data: any) => console.log(data));
  }

  gallerynext() {
    this.ngxSiemaService.next(1, '.siema')
      .subscribe((data: any) => console.log(data));
  }

  
}
