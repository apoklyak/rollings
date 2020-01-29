import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AlertsComponent} from './alerts.component';

const alertsRoutes: Routes = [
  {
    path: '',
    component: AlertsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(alertsRoutes)
  ],
  exports: [RouterModule]
})
export class AlertsRoutingModule {
}
