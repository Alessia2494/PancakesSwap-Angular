import { Component, OnInit } from '@angular/core';
import { card } from 'src/app/models/modelSection2';

@Component({
  selector: 'app-section-n2',
  templateUrl: './section-n2.component.html',
  styleUrls: ['./section-n2.component.css']
})
export class SectionN2Component implements OnInit {

  cards:card[]=[
    {
      img: "../../../assets/reference-img/people.png",
      h1: "4 million",
      h2: "users",
      h5: "in the last 30 days"
    },
    {
      img: "../../../assets/reference-img/circle.png",
      h1: "51 million",
      h2: "trades",
      h5: "made in the last 30 days"
    },
    {
      img: "../../../assets/reference-img/schemes.png",
      h1: "$12 billion",
      h2: "staked",
      h5: "Total Value Locked"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
