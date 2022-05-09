import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreFooterComponent } from './pre-footer/pre-footer.component';
import { Sec1ContainerComponent } from './section-1/sec1-container/sec1-container.component';
import { SectionN2Component } from './section-2/section-n2/section-n2.component';
import { Sec3ContainerComponent } from './section-3/sec3-container/sec3-container.component';
import { AnimationLunarbunnyComponent } from './section-1/animation-lunarbunny/animation-lunarbunny.component';
import { Sec1ContentComponent } from './section-1/sec1-content/sec1-content.component';
import { Sec3AssetsComponent } from './section-3/sec3-assets/sec3-assets.component';
import { Sec3ContentComponent } from './section-3/sec3-content/sec3-content.component';
import { AnimationGraficComponent } from './section-4/animation-grafic/animation-grafic.component';
import { Sec4ContentComponent } from './section-4/sec4-content/sec4-content.component';
import { Sec4ContainerComponent } from './section-4/sec4-container/sec4-container.component';
import { Sec5CardIndigoComponent } from './section-5/sec5-card-indigo/sec5-card-indigo.component';
import { Sec5CardOrangeComponent } from './section-5/sec5-card-orange/sec5-card-orange.component';
import { Sec5ContainerComponent } from './section-5/sec5-container/sec5-container.component';
import { Sec5ContentComponent } from './section-5/sec5-content/sec5-content.component';
import { Sec6ContainerComponent } from './section-6/sec6-container/sec6-container.component';
import { Sec6MainContentComponent } from './section-6/sec6-main-content/sec6-main-content.component';
import { Sec6StatisticsComponent } from './section-6/sec6-statistics/sec6-statistics.component';
import { AppRoutingModule } from '../app-routing.module';
import { ContainerHomeComponent } from './pages/container-home/container-home.component';



@NgModule({
  declarations: [
    PreFooterComponent,
    Sec1ContainerComponent,
    SectionN2Component,
    Sec3ContainerComponent,
    AnimationLunarbunnyComponent,
    Sec1ContentComponent,
    Sec3AssetsComponent,
    Sec3ContentComponent,
    AnimationGraficComponent,
    Sec4ContentComponent,
    Sec4ContainerComponent,
    Sec5CardIndigoComponent,
    Sec5CardOrangeComponent,
    Sec5ContainerComponent,
    Sec5ContentComponent,
    Sec6ContainerComponent,
    Sec6MainContentComponent,
    Sec6StatisticsComponent,
    ContainerHomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    ContainerHomeComponent,
  ]
})
export class HomepageModule { }
