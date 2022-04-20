import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildRoutingModule } from './child-routing.module';
import { WalletComponent } from './wallet/wallet.component';



@NgModule({
  declarations: [
    WalletComponent
  ],
  imports: [CommonModule, ChildRoutingModule]
})
export class ChildModule { }
