import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProgressComponent} from './progress.component';

const progressRoutes: Routes = [
  {
    path: 'progress.html',
    component: ProgressComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(progressRoutes)
  ],
  exports: [RouterModule]
})
export class ProgressRoutingModule {
}
