import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import '@angular/material/prebuilt-themes/indigo-pink.css';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatCheckboxModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  declarations: []
})
export class CustomMaterialModule {
}
