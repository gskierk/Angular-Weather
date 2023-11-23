import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAComponent } from './page-a/page-a.component';
import { PageBComponent } from './page-b/page-b.component';

const routes: Routes = [
  {
    path: 'page-a',
    component: PageAComponent,
    pathMatch: 'full'
  },
  {
    path: 'page-b',
    component: PageBComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
