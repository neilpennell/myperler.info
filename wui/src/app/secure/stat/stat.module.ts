import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatComponent} from './stat.component';
import {CustomMaterialModule} from '../../shared/custom-material/custom-material.module';

@NgModule({
  imports: [CommonModule, CustomMaterialModule],
  declarations: [StatComponent],
  exports: [StatComponent]
})
export class StatModule {
}
