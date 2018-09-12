import {Component, OnDestroy} from '@angular/core';
import {ShopService} from './shop.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.template.html',
  styleUrls: ['./shop.style.scss']
})

export class ShopComponent implements OnDestroy {
  constructor(private shopService: ShopService,
              private route: ActivatedRoute) {
    this.shopService.setCart(route.snapshot.data['cart']);
  }

  public get products() {
    return this.shopService.products;
  }

  ngOnDestroy() {
    this.shopService.setCart(false);
  }
}
