import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchBoxModule } from 'src/app/components/search-box/search-box.module';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page.routing';

@NgModule({
  imports: [CommonModule, HomePageRoutingModule, SearchBoxModule],
  declarations: [HomePageComponent],
})
export class HomePageModule {}
