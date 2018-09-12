import {AfterViewInit, Component, Input} from '@angular/core';
declare var require: any;


@Component({
  selector: 'app-mobile-product-slider',
  templateUrl: './mobile-product-slider.component.html',
  styleUrls: ['./mobile-product-slider.component.scss']
})
export class MobileProductSliderComponent implements AfterViewInit {
  @Input() item;
  swiper: any;

  ngAfterViewInit() {
    this.swiperInit();
  }

  swiperInit() {
    const Swiper = require('swiper/dist/js/swiper.min.js');
    this.swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  }
}
