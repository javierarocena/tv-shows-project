import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BasicComponentModule } from 'src/app/components/basics/basics.components.module';
import { SearchBoxModule } from 'src/app/components/search-box/search-box.module';
import { ShowItemModule } from 'src/app/components/show-item/show-item.module';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page.routing';

@NgModule({
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ShowItemModule,
    BasicComponentModule,
    SearchBoxModule,
  ],
  declarations: [HomePageComponent],
})
export class HomePageModule {}
