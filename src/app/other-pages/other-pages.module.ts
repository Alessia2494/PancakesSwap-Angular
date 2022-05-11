import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoolsComponent } from './pools/pools.component';
import { SectionTradeLiquidityComponent } from './section-trade-liquidity/section-trade-liquidity.component';
import { SectionTradeNowComponent } from './section-trade-now/section-trade-now.component';
import { AppRoutingModule } from '../app-routing.module';
import { LiquidityCompComponent } from './section-trade-liquidity/liquidity-comp/liquidity-comp.component';
import { FarmsContainerComponent } from './farms/farms-container/farms-container.component';
import { EarnNavComponent } from './farms/layout/earn-nav/earn-nav.component';
import { TableBodyComponent } from './farms/table/table-body/table-body.component';
import { DetailCompComponent } from './detail-comp/detail-comp.component';



@NgModule({
  declarations: [
    PoolsComponent,
    SectionTradeLiquidityComponent,
    LiquidityCompComponent,
    SectionTradeNowComponent,
    FarmsContainerComponent,
    EarnNavComponent,
    TableBodyComponent,
    DetailCompComponent

  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class OtherPagesModule { }
