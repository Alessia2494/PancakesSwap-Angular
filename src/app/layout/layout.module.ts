import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WalletComponent } from './wallet/wallet.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    PagenotfoundComponent,
    WalletComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    WalletComponent
  ]
})
export class LayoutModule { }
