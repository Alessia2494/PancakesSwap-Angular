import { Component, OnInit } from '@angular/core';
import { modalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  constructor(private modal: modalService) { }

  ngOnInit(): void {
    document.body.style.overflow = "hidden";
  }

  closeModal(){
    this.modal.setModal(false);
    document.body.style.overflow = "initial";
  }

}
