import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/models/TableData';
import { FarmsService } from '../../../../services/farms.service';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.css']
})
export class TableBodyComponent implements OnInit {

  constructor(private farmsService: FarmsService) { }

  tableStatistic$!: Observable<TableData[]>;

  ngOnInit(): void {
    this.tableStatistic$ = this.farmsService.getAll()
  }

}
