import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChildRoutingModule } from './child-routing.module';

const routes: Routes = [
  /*mettere qui le varie rotte con path*/


];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule, ChildRoutingModule]
})
export class AppRoutingModule { }
