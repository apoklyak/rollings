import {Injectable} from '@angular/core';
import {products} from '../../enums/products';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs';

@Injectable()
export class ShopService {

  public source;
  public products;
  private cart: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.source = products;
    this.products = this.source;
  }

  setCart(cartState): void {
    this.cart.next(cartState);
  }

  onSetCart(): Observable<boolean> {
    return this.cart.asObservable();
  }

  public getItem(url: string) {
    return this.source.find(x => x.UrlName === url);
  }
}

