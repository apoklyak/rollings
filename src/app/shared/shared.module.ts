import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreloaderComponent} from './preloader/preloader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PreloaderComponent],
  declarations: [PreloaderComponent]
})
export class SharedModule {
}
