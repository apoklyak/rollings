import {Component} from '@angular/core';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {filter} from 'rxjs/operators';
import {ShopService} from './workspace/shop/shop.service';

export enum MenuItems {
  Tables = 1,
  // Charts = 2
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('openSubmenu', [
      state('false',
        style({
          height: '0',
          display: 'none'
        }),
      ),
      state('true',
        style({
          height: '*',
          display: 'block'
        })
      ),
      transition('true <=> false', animate('.25s'))
    ])
  ]
})

export class AppComponent {
  public windowWidth: number;
  public clicked: boolean = false;
  public active: boolean = false;
  public hide: boolean = false;
  public themeSettings: boolean = false;
  public blueTheme: boolean = false;
  public greenTheme: boolean = false;
  public collapse: boolean = false;
  // public menuLoading: boolean = false;
  public tableArray = ['/responsive-table.html', '/tables', '/dynamic-table', '/nesting-table.html'];
  // public chartsArray = ['/google-charts', '/ng2-charts'];

  public menuItems = MenuItems;
  public selectedMenuItem;

  public cart: boolean;

  constructor(private activatedRoute: Router,
              private route: ActivatedRoute,
              private shopService: ShopService) {
    // this.menuLoading = true;
    // this.activatedRoute.events.pipe(
    //   filter(data => Boolean(data))
    // ).subscribe(data => {
    //   if (data instanceof NavigationStart) {
    //     this.menuLoading = false;
    //   }
    //   if (data instanceof NavigationStart && this.tableArray.indexOf(data.url) !== -1) {
    //     this.selectedMenuItem = this.menuItems.Tables;
    //   }
    //   if (data instanceof NavigationStart && this.chartsArray.indexOf(data.url) !== -1) {
    //     this.selectedMenuItem = this.menuItems.Charts;
    //   }
    // });
    this.shopService.onSetCart()
      .subscribe((cartState) => {
        this.cart = cartState;
      });
    this.activatedRoute.events.subscribe(data => {
      if (data) {
        this.active = false;
      }
    });
  }

  sidebarToggle() {
    this.clicked = true;
    this.windowWidth = window.innerWidth;
    if (this.windowWidth < 1200) {
      this.active = !this.active;
    }
    if (this.windowWidth >= 1200) {
      this.hide = !this.hide;
    }
  }

  isSelected(menuItem): boolean {
    return this.selectedMenuItem === menuItem;
  }

  selectMenuItem(menuItem) {
    if (this.selectedMenuItem === menuItem) {
      this.selectedMenuItem = !this.selectedMenuItem;
    } else {
      this.selectedMenuItem = menuItem;
    }
  }

  onResize() {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth < 1200) {
      this.hide = false;
    }
    if (this.windowWidth >= 1200) {
      this.active = false;
    }
  }

  activeBlueTheme() {
    this.greenTheme = false;
    this.blueTheme = true;
  }

  activeGreenTheme() {
    this.blueTheme = false;
    this.greenTheme = true;
  }
}
