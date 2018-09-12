import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemResolver} from './item.resolver';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ShopComponent} from './shop.component';

const shopRoutes: Routes = [
  {
    path: 'shop',
    component: ShopComponent,
    data: {
      cart: true
    }
  },
  {
    path: 'shop/:name',
    component: ProductDetailComponent,
    resolve: {
      item: ItemResolver
    },
    data: {
      cart: true
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(shopRoutes)
  ],
  exports: [RouterModule]
})
export class ShopRoutingModule {
}
