import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() public theader: any[] | null = null;
  @Input() public tbody = {};

  constructor() { }

  ngOnInit(): void {
  }

}
