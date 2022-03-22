import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Sec5ContainerComponent } from './section-5/sec5-container/sec5-container.component';
import { Sec5ContentComponent } from './section-5/sec5-content/sec5-content.component';
import { Sec5CardOrangeComponent } from './section-5/sec5-card-orange/sec5-card-orange.component';
import { Sec5CardIndigoComponent } from './section-5/sec5-card-indigo/sec5-card-indigo.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { Sec6ContainerComponent } from './section-6/sec6-container/sec6-container.component';
import { Sec6StatisticsComponent } from './section-6/sec6-statistics/sec6-statistics.component';
import { Sec6MainContentComponent } from './section-6/sec6-main-content/sec6-main-content.component';
import { FooterComponent } from './footer/footer.component';
import { PreFooterComponent } from './pre-footer/pre-footer.component';


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
    PreFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
