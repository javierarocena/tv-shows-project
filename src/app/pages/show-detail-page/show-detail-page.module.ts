import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ShowDetailPageRoutingModule } from './show-detail-page.routing';
import { ShowDetailPageComponent } from './show-detail-page.component';
import { StarsRatingModule } from 'src/app/components/stars-rating/start-rating.module';
import { BasicComponentModule } from 'src/app/components/basics/basics.components.module';

@NgModule({
  imports: [
    CommonModule,
    ShowDetailPageRoutingModule,
    BasicComponentModule,
    StarsRatingModule,
  ],
  declarations: [ShowDetailPageComponent],
})
export class ShowDetailPageModule {}
