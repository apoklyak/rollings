import {NgModule} from '@angular/core';
import {ShopComponent} from './shop.component';
import {ProductComponent} from './product/product.component';
import {RouterModule} from '@angular/router';
import {ShopService} from './shop.service';
import {MobileProductSliderComponent} from './product-detail/mobile-product-slider/mobile-product-slider.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ShopRoutingModule} from './routing.module';
import {CommonModule} from '@angular/common';
import {ItemResolver} from './item.resolver';
import {NgxSiemaModule} from 'ngx-siema';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  imports: [
    RouterModule,
    ShopRoutingModule,
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    NgxSiemaModule.forRoot()
  ],
  declarations: [
    ShopComponent,
    ProductComponent,
    MobileProductSliderComponent,
    ProductDetailComponent
  ],
  exports: [
    ProductComponent,
    MobileProductSliderComponent,
    ProductDetailComponent
  ],
  providers: [
    ShopService,
    ItemResolver
  ]
})

export class ShopModule {

}
