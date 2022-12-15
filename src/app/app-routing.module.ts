import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/shows',
    pathMatch: 'full',
  },
  {
    path: 'shows',
    loadChildren: () =>
      import('./pages/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: 'shows/:showName',
    loadChildren: () =>
      import('./pages/show-detail-page/show-detail-page.module').then(
        (m) => m.ShowDetailPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
