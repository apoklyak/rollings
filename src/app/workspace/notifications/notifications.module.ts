import {NgModule} from '@angular/core';
import {WidgetModule} from '../../core/widget/widget.module';
import {NotificationsComponent} from './notifications.component';
import {NotificationsRoutingModule} from './routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    WidgetModule,
    NotificationsRoutingModule
  ],
  declarations: [
    NotificationsComponent
  ]
})

export class NotificationsModule {
}
