import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContainerHomeComponent } from './homepage/pages/container-home/container-home.component';
import { PagenotfoundComponent } from './layout/pagenotfound/pagenotfound.component';

const ChildModule = () =>
  import('./child-route-module/child.module').then((m) => m.ChildModule);

const routes: Routes = [
  /*mettere qui le varie rotte con path*/
  { path: 'child', loadChildren: ChildModule },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ContainerHomeComponent },
  { path: 'pagenotfound', component: PagenotfoundComponent},
  { path: '**', redirectTo: 'pagenotfound'}
];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }