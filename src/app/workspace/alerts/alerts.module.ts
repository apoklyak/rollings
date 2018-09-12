import {NgModule} from '@angular/core';
import {AlertsComponent} from './alerts.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AlertsRoutingModule} from './routing.module';
import {WidgetModule} from '../../core/widget/widget.module';
import {AlertModule} from '../../core/alert/alert.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FontAwesomeModule,
    AlertsRoutingModule,
    WidgetModule,
    AlertModule
  ],
  declarations: [
    AlertsComponent
  ]
})

export class AlertsModule {
}
