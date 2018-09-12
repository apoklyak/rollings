import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {ShopService} from './shop.service';


@Injectable()
export class ItemResolver {

  constructor(private shopService: ShopService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.shopService.getItem(route.params.name);
  }
}
