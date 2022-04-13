import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { STATISTICS } from 'src/app/mockup/mock-statistics';
import { Statistic } from 'src/app/models/Statistics';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  private statistics: Statistic[] = STATISTICS;

  private subjectStatistic = new BehaviorSubject<Statistic[]>(this.statistics);
  public statistic$ = this.subjectStatistic.asObservable();

  constructor() { }

  getAll(): Observable<Statistic[]> {
    return this.statistic$.pipe(
      tap(() => console.log('getAll section6 statistics eseguito'))
    )
  }
}

