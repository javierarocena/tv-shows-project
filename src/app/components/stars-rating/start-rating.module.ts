import { NgModule } from '@angular/core';
import { StarsRatingComponent } from './stars-rating.component';
import { NgxStarsModule } from 'ngx-stars';

@NgModule({
  imports: [NgxStarsModule],
  exports: [StarsRatingComponent],
  declarations: [StarsRatingComponent],
})
export class StarsRatingModule {}
