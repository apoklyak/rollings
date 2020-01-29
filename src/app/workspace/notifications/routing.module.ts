import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotificationsComponent} from './notifications.component';

const notificationsRoutes: Routes = [
  {
    path: '',
    component: NotificationsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(notificationsRoutes)
  ],
  exports: [RouterModule]
})
export class NotificationsRoutingModule {
}
