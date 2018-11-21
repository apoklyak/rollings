import {NgModule} from '@angular/core';
import {WidgetModule} from '../../core/widget/widget.module';
import {NotificationsComponent} from './notifications.component';
import {NotificationsRoutingModule} from './routing.module';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    WidgetModule,
    NotificationsRoutingModule,
    FontAwesomeModule
  ],
  declarations: [
    NotificationsComponent
  ]
})

export class NotificationsModule {
}
