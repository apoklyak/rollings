import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AccordionsRoutingModule} from './routing.module';
import {WidgetModule} from '../../core/widget/widget.module';
import {AccordionsComponent} from './accordions.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FontAwesomeModule,
    AccordionsRoutingModule,
    WidgetModule
  ],
  declarations: [
    AccordionsComponent
  ]
})

export class AccordionsModule {
}
