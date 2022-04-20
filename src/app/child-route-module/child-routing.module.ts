import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FarmsContainerComponent } from '../components/farms/farms-container/farms-container.component';
import { SectionTradeNowComponent } from '../components/section-trade-now/section-trade-now.component';

const routes: Routes = [
  /*scrivere rotte child*/
  { path: 'farms', component: FarmsContainerComponent},
  { path: 'trade', component: SectionTradeNowComponent}

]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule,]
})
export class ChildRoutingModule { }
