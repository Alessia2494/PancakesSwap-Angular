import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/*scrivere rotte child*/

@NgModule({
  declarations: [],
  imports: [CommonModule,/*ruotermodule.forchild*/],
  exports: [RouterModule,]
})
export class ChildRoutingModule { }
