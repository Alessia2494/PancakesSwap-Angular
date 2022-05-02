import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { modalService } from './services/modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PancakesSwap-Angular';
  modal !: boolean;
  subscription !: Subscription;

  constructor(private modalS: modalService) {}

  ngOnInit(): void {
    this.subscription = this.modalS.getModal()
    .subscribe(response => {this.modal = response})

  }
}
