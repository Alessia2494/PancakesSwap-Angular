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
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
