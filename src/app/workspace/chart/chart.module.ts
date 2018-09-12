import {NgModule} from '@angular/core';
import {ChartsRoutingModule} from './routing.module';
import {WidgetModule} from '../../core/widget/widget.module';
import {ChartsComponent} from './chart.component';

@NgModule({
  imports: [
    ChartsRoutingModule,
    WidgetModule
  ],
  declarations: [
    ChartsComponent
  ]
})

export class ChartModule {
}
