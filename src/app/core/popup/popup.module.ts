import {NgModule} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CommonModule} from '@angular/common';
import {PopupComponent} from './popup.component';
import {PopupService} from './popup.service';


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
  ],
  providers: [PopupService]
})

export class PopupModule {
}
