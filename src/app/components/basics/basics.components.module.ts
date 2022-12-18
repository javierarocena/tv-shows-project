import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorComponent } from './error/error.component';
import { GridComponent } from './grid/grid.component';
import { ImageComponent } from './image/image.component';

const BASICS_COMPONENTS = [GridComponent, ImageComponent, ErrorComponent];

@NgModule({
  imports: [CommonModule],
  exports: BASICS_COMPONENTS,
  declarations: BASICS_COMPONENTS,
})
export class BasicComponentModule {}
