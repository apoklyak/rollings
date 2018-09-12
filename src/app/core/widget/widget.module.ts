import {NgModule} from '@angular/core';
import {WidgetComponent} from './widget.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [
    WidgetComponent
  ],
  exports: [
    WidgetComponent
  ]
})

export class WidgetModule {

}
