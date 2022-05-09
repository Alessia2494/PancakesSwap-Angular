import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FarmsContainerComponent } from '../other-pages/farms/farms-container/farms-container.component';
import { SectionTradeNowComponent } from '../other-pages/section-trade-now/section-trade-now.component';
import { SectionTradeLiquidityComponent } from '../other-pages/section-trade-liquidity/section-trade-liquidity.component';
import { PoolsComponent } from '../other-pages/pools/pools.component';

const routes: Routes = [
  /*scrivere rotte child*/
  { path: 'farms', component: FarmsContainerComponent},
  { path: 'pools', component: PoolsComponent},
  { path: 'trade', component: SectionTradeNowComponent},
  { path: 'liquidity', component:SectionTradeLiquidityComponent},
  { path: 'explore', component: FarmsContainerComponent}
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
