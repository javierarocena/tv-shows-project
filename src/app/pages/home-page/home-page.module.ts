import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BasicComponentModule } from 'src/app/components/basics/basics.components.module';
import { SearchBoxModule } from 'src/app/components/search-box/search-box.module';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page.routing';

@NgModule({
  imports: [
    CommonModule,
    HomePageRoutingModule,
    BasicComponentModule,
    SearchBoxModule,
  ],
  declarations: [HomePageComponent],
})
export class HomePageModule {}
