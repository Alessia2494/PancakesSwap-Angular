import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const ChildModule = () =>
  import('./child-route-module/child.module').then((m) => m.ChildModule);

const routes: Routes = [
  /*mettere qui le varie rotte con path*/
  { path: 'child', loadChildren: ChildModule },


];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }