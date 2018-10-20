import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShopService} from '../shop.service';
import {ActivatedRoute} from '@angular/router';
import {NgxSiemaOptions, NgxSiemaService} from 'ngx-siema';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit, OnDestroy {
  public sliderProduct: Array<object>;
  public model;
  public windowWidth = window.innerWidth;
  public isMobile: boolean = false;
  public images = [];
  public image: string;
  public indexImage: number = 0;
  public index: number = 0;
  public sizes: Array<string>;
  public description;

  public curentProduct: any;
  public productName: string;
  public price: number;

  private UrlName: string;


  public options: NgxSiemaOptions = {
    selector: '.another-products',
    duration: 200,
    easing: 'ease-out',
    perPage: {
      300: 5,
      800: 10,
      1300: 15,
      1500: 20
    },
    startIndex: 0,
    draggable: true,
    loop: false
  };


  constructor(private shopService: ShopService,
              private route: ActivatedRoute,
              private ngxSiemaService: NgxSiemaService) {
    // this.routeSubscription = route.params.subscribe(
    //   params => {
    //     this.UrlName = params['Url'];
    //   }
    // );

    this.shopService.setCart(route.snapshot.data['cart']);
  }

  next() {
    this.indexImage++;
    const countOfImages = this.images.length - 1;
    if (this.indexImage > countOfImages) {
      this.indexImage = 0;
    }
    this.image = this.images[this.indexImage];
  }

  prev() {
    this.indexImage--;
    const countOfImages = this.images.length - 1;
    if (this.indexImage < 0) {
      this.indexImage = countOfImages;
    }
    this.image = this.images[this.indexImage];
  }

  changeThumbnailImage(idx) {
    this.image = this.images[idx];
  }

  sliderNext() {
    this.ngxSiemaService.next(1, '.another-products')
      .subscribe((data: any) => {
        console.log(data);
      });
  }

  sliderPrev() {
    this.ngxSiemaService.prev(1, '.another-products')
      .subscribe((data: any) => {
        console.log(data);
      });
  }


  ngOnInit() {
    this.route.data.subscribe((data: { item }) => {
      this.model = data.item;
      this.productName = this.model.Name;
      this.images = this.model.Images;
      this.price = this.model.Price;
      this.image = this.images[this.indexImage];
      this.sizes = this.model.Sizes;
      this.description = this.model.Description;
    });

    this.sliderProduct = this.shopService.products;
    this.isMobile = this.windowWidth < 576;
  }

  ngOnDestroy() {
    this.shopService.setCart(false);
  }

  onResize() {
    this.windowWidth = window.innerWidth;
    this.isMobile = this.windowWidth < 576;
  }

}
