import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Sec5ContainerComponent } from './section-5/sec5-container/sec5-container.component';
import { Sec5ContentComponent } from './section-5/sec5-content/sec5-content.component';
import { Sec5CardOrangeComponent } from './section-5/sec5-card-orange/sec5-card-orange.component';
import { Sec5CardIndigoComponent } from './section-5/sec5-card-indigo/sec5-card-indigo.component';

@NgModule({
  declarations: [
    AppComponent,
    Sec5ContainerComponent,
    Sec5ContentComponent,
    Sec5CardOrangeComponent,
    Sec5CardIndigoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
