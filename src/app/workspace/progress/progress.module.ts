import {NgModule} from '@angular/core';
import {ProgressRoutingModule} from './routing.module';
import {WidgetModule} from '../../core/widget/widget.module';
import {ProgressComponent} from './progress.component';
import {ProgressBarModule} from '../../core/progress-bar/progress-bar.module';

@NgModule({
  imports: [
    WidgetModule,
    ProgressRoutingModule,
    ProgressBarModule
  ],
  declarations: [
    ProgressComponent
  ]
})

export class ProgressModule {
}
