import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Sec5ContainerComponent } from './components/section-5/sec5-container/sec5-container.component';
import { Sec5ContentComponent } from './components/section-5/sec5-content/sec5-content.component';
import { Sec5CardOrangeComponent } from './components/section-5/sec5-card-orange/sec5-card-orange.component';
import { Sec5CardIndigoComponent } from './components/section-5/sec5-card-indigo/sec5-card-indigo.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { Sec6ContainerComponent } from './components/section-6/sec6-container/sec6-container.component';
import { Sec6StatisticsComponent } from './components/section-6/sec6-statistics/sec6-statistics.component';
import { Sec6MainContentComponent } from './components/section-6/sec6-main-content/sec6-main-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { PreFooterComponent } from './components/pre-footer/pre-footer.component';
import { Sec1ContainerComponent } from './components/section-1/sec1-container/sec1-container.component';
import { Sec1ContentComponent } from './components/section-1/sec1-content/sec1-content.component';
import { AnimationLunarbunnyComponent } from './components/section-1/animation-lunarbunny/animation-lunarbunny.component';
import { SectionN2Component } from './components/section-2/section-n2/section-n2.component';
import { Sec4ContainerComponent } from './components/section-4/sec4-container/sec4-container.component';
import { Sec4ContentComponent } from './components/section-4/sec4-content/sec4-content.component';
import { AnimationGraficComponent } from './components/section-4/animation-grafic/animation-grafic.component';
import { Sec3AssetsComponent} from './components/section-3/sec3-assets/sec3-assets.component';
import { Sec3ContainerComponent } from './components/section-3/sec3-container/sec3-container.component';
import { Sec3ContentComponent } from './components/section-3/sec3-content/sec3-content.component';
import { AppRoutingModule } from './app-routing.module';
import { ContainerHomeComponent } from './components/pages/container-home/container-home.component';
import { FarmsContainerComponent } from './components/farms/farms-container/farms-container.component';
import { TableBodyComponent } from './components/farms/table/table-body/table-body.component';
import { SectionTradeNowComponent } from './components/section-trade-now/section-trade-now.component';
import { SectionTradeLiquidityComponent } from './components/section-trade-liquidity/section-trade-liquidity.component';
import { LiquidityCompComponent } from './components/section-trade-liquidity/liquidity-comp/liquidity-comp.component';
import { PoolsComponent } from './components/pools/pools.component';
import { ChildRoutingModule } from './child-route-module/child-routing.module';
import { EarnNavComponent } from './components/farms/layout/earn-nav/earn-nav.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    Sec5ContainerComponent,
    Sec5ContentComponent,
    Sec5CardOrangeComponent,
    Sec5CardIndigoComponent,
    NavbarComponent,
    Sec6ContainerComponent,
    Sec6StatisticsComponent,
    Sec6MainContentComponent,
    FooterComponent,
    PreFooterComponent,
    Sec1ContainerComponent,
    Sec1ContentComponent,
    AnimationLunarbunnyComponent,
    SectionN2Component,
    Sec4ContainerComponent,
    Sec4ContentComponent,
    AnimationGraficComponent,
    Sec3ContainerComponent,
    Sec3AssetsComponent,
    Sec3ContentComponent,
    ContainerHomeComponent,
    FarmsContainerComponent,
    TableBodyComponent,
    SectionTradeNowComponent,
    SectionTradeLiquidityComponent,
    LiquidityCompComponent,
    PoolsComponent,
    EarnNavComponent,
    WalletComponent,
    PagenotfoundComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChildRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
