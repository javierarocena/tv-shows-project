import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StarsRatingModule } from 'src/app/components/stars-rating/start-rating.module';
import { BasicComponentModule } from '../basics/basics.components.module';
import { ShowItemComponent } from './show-item.component';

@NgModule({
  imports: [CommonModule, BasicComponentModule, StarsRatingModule],
  exports: [ShowItemComponent],
  declarations: [ShowItemComponent],
})
export class ShowItemModule {}
