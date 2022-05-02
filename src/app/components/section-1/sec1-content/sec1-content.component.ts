import { Component, OnInit } from '@angular/core';
import { modalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-sec1-content',
  templateUrl: './sec1-content.component.html',
  styleUrls: ['./sec1-content.component.css']
})
export class Sec1ContentComponent implements OnInit {

  constructor(private modal: modalService) { }

  ngOnInit(): void {
  }

  modalOn(){
    this.modal.setModal(true);
  }

}
