import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GalleriesComponent } from './galleries.component';


const routes: Routes = [
  {
    path: '',
   component: GalleriesComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleriesRoutingModule { }