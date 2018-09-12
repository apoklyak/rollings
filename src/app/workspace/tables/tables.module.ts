import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TablesComponent} from './tables.component';
import {ResponsiveTableComponent} from './responsive/responsive-table.component';
import {NestingTableComponent} from './nesting/nesting.component';
import {SharedModule} from '../../shared/shared.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  imports: [
    BrowserModule,
    FontAwesomeModule,
    SharedModule
  ],
  declarations: [
    TablesComponent,
    ResponsiveTableComponent,
    NestingTableComponent
  ]
})

export class TablesModule {

}
