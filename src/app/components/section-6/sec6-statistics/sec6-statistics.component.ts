import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Statistic } from 'src/app/models/Statistics';
import { StatisticService } from '../statistic.service';

@Component({
  selector: 'app-sec6-statistics',
  templateUrl: './sec6-statistics.component.html',
  styleUrls: ['./sec6-statistics.component.css']
})
export class Sec6StatisticsComponent implements OnInit {

  statistic$!: Observable<Statistic[]>

  constructor(private statisticService: StatisticService) { }

  ngOnInit(): void {
    this.statistic$ = this.statisticService.getAll()
  }
  
}
