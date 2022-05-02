import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class modalService {

    modal = new BehaviorSubject<boolean>(false);

  constructor() { }

  setModal(booly: boolean){
    this.modal.next(booly);
  }

  getModal(): BehaviorSubject<boolean> {
      return this.modal;
  }

}