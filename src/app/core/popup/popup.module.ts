import {NgModule} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CommonModule} from '@angular/common';
import {PopupComponent} from './popup.component';


@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [
    PopupComponent
  ],
  exports: [
    PopupComponent
  ]
})

export class PopupModule {

}
