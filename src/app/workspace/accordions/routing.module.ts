import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccordionsComponent} from './accordions.component';

const accordionsRoutes: Routes = [
  {
    path: '',
    component: AccordionsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(accordionsRoutes)
  ],
  exports: [RouterModule]
})
export class AccordionsRoutingModule {
}
