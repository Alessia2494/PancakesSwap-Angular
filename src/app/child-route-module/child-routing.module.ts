import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FarmsContainerComponent } from '../components/farms/farms-container/farms-container.component';
import { SectionTradeNowComponent } from '../components/section-trade-now/section-trade-now.component';
import { PoolsComponent } from '../pools/pools.component';
import { SectionTradeLiquidityComponent } from '../components/section-trade-liquidity/section-trade-liquidity.component';

const routes: Routes = [
  /*scrivere rotte child*/
  { path: 'farms', component: FarmsContainerComponent},
  { path: 'pools', component: PoolsComponent},
  { path: 'trade', component: SectionTradeNowComponent},
  { path: 'liquidity', component:SectionTradeLiquidityComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    ],
  exports: [
    RouterModule
  ]
})
export class ChildRoutingModule { }
