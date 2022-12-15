import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDetailPageComponent } from './show-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: ShowDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowDetailPageRoutingModule {}
