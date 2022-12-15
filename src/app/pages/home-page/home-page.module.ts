import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page.routing';

@NgModule({
  imports: [HomePageRoutingModule],
  declarations: [HomePageComponent],
})
export class HomePageModule {}
