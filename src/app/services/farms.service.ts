import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { TABLEDATA } from 'src/app/mockup/mock-table-data';
import { TableData } from 'src/app/models/TableData';

@Injectable({
  providedIn: 'root'
})
export class FarmsService {

  private tableData: TableData[] = TABLEDATA;

  private subjectData = new BehaviorSubject<TableData[]>(this.tableData);
  public data$ = this.subjectData.asObservable();

  constructor() { }

  getAll(): Observable<TableData[]> {
    return this.data$.pipe(
      tap(() => console.log('getAll dati tabella farms eseguito'))
    )
  }
}
