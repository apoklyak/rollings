import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {ResponsiveTableComponent} from './workspace/tables/responsive/responsive-table.component';
import {NestingTableComponent} from './workspace/tables/nesting/nesting.component';
import {TablesComponent} from './workspace/tables/tables.component';
import {TablesModule} from './workspace/tables/tables.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AllIconsComponent} from './workspace/all-icons/all-icons.component';

// Вместо того, чтобы подключить всю библиотеку с иконками, снизу идёт подключение определённых иконок.
// Это для того, чтобы избежать вздутия финального бандла (bloating your final bundle).
// Если вы хотите подключить всю библиотеку с иконками, посмотрите, как это сделано в компоненте AllIconsComponent
// или здесь https://github.com/FortAwesome/angular-fontawesome
// В случае же если вы хотите оставить определённый набор иконок,
// то нужно сделать это, как показано ниже, но затем удалить компонент AllIconsComponent

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faChalkboard,
  faCogs,
  faTable,
  faChartPie,
  faShoppingCart,
  faAngleDown,
  faAngleUp,
  faAngleLeft,
  faAngleRight,
  faCaretDown,
  faCaretLeft,
  faCaretRight,
  faCaretUp,
  faCog,
  faTimes,
  faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';
import {PopupService} from './core/popup/popup.service';
import {ShopService} from './workspace/shop/shop.service';


const routes: Routes = [
  {path: '', redirectTo: 'shop', pathMatch: 'full'},
  {path: 'tables', component: TablesComponent},
  {path: 'nesting-table.html', component: NestingTableComponent},
  {path: 'responsive-table.html', component: ResponsiveTableComponent},
  {path: 'all-icons.html', component: AllIconsComponent},
  {path: 'gallery', loadChildren: () => import('./workspace/galleries/galleries.module').then(m => m.GalleriesModule) },
  {path: 'notifications.html', loadChildren: () => import('./workspace/notifications/notifications.module').then(m => m.NotificationsModule) },
  {path: 'progress.html', loadChildren: () => import('./workspace/progress/progress.module').then(m => m.ProgressModule) },
  {path: 'accordions.html', loadChildren: () => import('./workspace/accordions/accordions.module').then(m => m.AccordionsModule) },
  {path: 'alerts.html', loadChildren: () => import('./workspace/alerts/alerts.module').then(m => m.AlertsModule) },
  {path: 'shop', loadChildren: () => import('./workspace/shop/shop.module').then(m => m.ShopModule) },
  {path: 'charts.html', loadChildren: () => import('./workspace/chart/chart.module').then(m => m.ChartModule) },
];


@NgModule({
  declarations: [
    AppComponent,
    AllIconsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    TablesModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [
    PopupService,
  ShopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faChalkboard);
    library.addIcons(faCogs);
    library.addIcons(faTable);
    library.addIcons(faChartPie);
    library.addIcons(faShoppingCart);
    library.addIcons(faAngleDown);
    library.addIcons(faAngleUp);
    library.addIcons(faAngleLeft);
    library.addIcons(faAngleRight);
    library.addIcons(faCaretDown);
    library.addIcons(faCaretLeft);
    library.addIcons(faCaretRight);
    library.addIcons(faCaretUp);
    library.addIcons(faCog);
    library.addIcons(faTimes);
    library.addIcons(faExclamationCircle);
      }
  
}
