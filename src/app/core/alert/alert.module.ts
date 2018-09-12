import {NgModule} from '@angular/core';
import {AlertComponent} from './alert.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [
    AlertComponent
  ],
  exports: [
    AlertComponent
  ]
})

export class AlertModule {

}
