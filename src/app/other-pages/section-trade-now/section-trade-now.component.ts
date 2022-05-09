import { Component, OnInit } from '@angular/core';
import { modalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-section-trade-now',
  templateUrl: './section-trade-now.component.html',
  styleUrls: ['./section-trade-now.component.css']
})
export class SectionTradeNowComponent implements OnInit {

  constructor(private modal: modalService) { }

  ngOnInit(): void {
  }

  modalOn(){
    this.modal.setModal(true);
  }

}
