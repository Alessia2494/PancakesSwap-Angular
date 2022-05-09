import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChildRoutingModule } from './child-route-module/child-routing.module';
import { LayoutModule } from './layout/layout.module';
import { HomepageModule } from './homepage/homepage.module';
import { OtherPagesModule } from './other-pages/other-pages.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChildRoutingModule,
    LayoutModule,
    HomepageModule,
    OtherPagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
