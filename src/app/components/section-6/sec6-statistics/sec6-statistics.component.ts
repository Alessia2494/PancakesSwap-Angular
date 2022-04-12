import { Component, OnInit } from '@angular/core';
import { Statistic } from 'src/app/models/statistics';

@Component({
  selector: 'app-sec6-statistics',
  templateUrl: './sec6-statistics.component.html',
  styleUrls: ['./sec6-statistics.component.css']
})
export class Sec6StatisticsComponent implements OnInit {

  statistics: Statistic[] = [
    { title: 'Total supply', value: '284,570,158' },
    { title: 'Burned to date', value: '426,692,888' },
    { title: 'Market cap', value: '$2.3 billion' },
    { title: 'Current emissions', value: '14.25/block' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
