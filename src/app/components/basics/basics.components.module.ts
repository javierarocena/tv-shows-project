import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridComponent } from './grid/grid.component';
import { ImageComponent } from './image/image.component';

const BASICS_COMPONENTS = [GridComponent, ImageComponent];

@NgModule({
  imports: [CommonModule],
  exports: BASICS_COMPONENTS,
  declarations: BASICS_COMPONENTS,
})
export class BasicComponentModule {}
