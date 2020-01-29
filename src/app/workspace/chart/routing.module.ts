import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChartsComponent} from './chart.component';

const alertsRoutes: Routes = [
  {
    path: '',
    component: ChartsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(alertsRoutes)
  ],
  exports: [RouterModule]
})
export class ChartsRoutingModule {
}
