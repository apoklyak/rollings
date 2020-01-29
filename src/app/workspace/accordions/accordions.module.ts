import {NgModule} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AccordionsRoutingModule} from './routing.module';
import {WidgetModule} from '../../core/widget/widget.module';
import {AccordionsComponent} from './accordions.component';
import { CommonModule } from '@angular/common'; 

@NgModule({
  imports: [
    FontAwesomeModule,
    AccordionsRoutingModule,
    WidgetModule,
    CommonModule
  ],
  declarations: [
    AccordionsComponent
  ]
})

export class AccordionsModule {
}
