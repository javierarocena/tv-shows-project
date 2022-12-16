import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridComponent } from './grid/grid.component';

const BASICS_COMPONENTS = [GridComponent];

@NgModule({
  imports: [CommonModule],
  exports: BASICS_COMPONENTS,
  declarations: BASICS_COMPONENTS,
})
export class BasicComponentModule {}
