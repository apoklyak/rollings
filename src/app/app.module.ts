import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {ResponsiveTableComponent} from './workspace/tables/responsive/responsive-table.component';
import {NestingTableComponent} from './workspace/tables/nesting/nesting.component';
import {TablesComponent} from './workspace/tables/tables.component';
import {TablesModule} from './workspace/tables/tables.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ShopModule} from './workspace/shop/shop.module';
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
import {AlertsModule} from './workspace/alerts/alerts.module';
import {ChartModule} from './workspace/chart/chart.module';
import {AccordionsModule} from './workspace/accordions/accordions.module';
import {ProgressModule} from './workspace/progress/progress.module';
import {NotificationsModule} from './workspace/notifications/notifications.module';
import {PopupService} from './core/popup/popup.service';


const routes: Routes = [
  {path: '', redirectTo: 'shop', pathMatch: 'full'},
  {path: 'tables', component: TablesComponent},
  {path: 'nesting-table.html', component: NestingTableComponent},
  {path: 'responsive-table.html', component: ResponsiveTableComponent},
  {path: 'all-icons.html', component: AllIconsComponent},
  { path: 'gallery', loadChildren: () => import('./workspace/galleries/galleries.module').then(m => m.GalleriesModule) }
];


@NgModule({
  declarations: [
    AppComponent,
    AllIconsComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true
    }),
    BrowserModule,
    TablesModule,
    ShopModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    AlertsModule,
    AccordionsModule,
    ProgressModule,
    NotificationsModule,
    ChartModule
  ],
  providers: [
    PopupService
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
