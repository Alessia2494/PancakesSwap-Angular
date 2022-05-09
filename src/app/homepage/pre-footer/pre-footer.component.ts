import { Component, OnInit } from '@angular/core';
import { modalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-pre-footer',
  templateUrl: './pre-footer.component.html',
  styleUrls: ['./pre-footer.component.css']
})
export class PreFooterComponent implements OnInit {

  constructor(private modal: modalService) { }

  ngOnInit(): void {
  }

  modalOn(){
    this.modal.setModal(true);
  }

}
