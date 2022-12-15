import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ShowDetailPageRoutingModule } from './show-detail-page.routing';
import { ShowDetailPageComponent } from './show-detail-page.component';

@NgModule({
  imports: [CommonModule, ShowDetailPageRoutingModule],
  declarations: [ShowDetailPageComponent],
})
export class ShowDetailPageModule {}
