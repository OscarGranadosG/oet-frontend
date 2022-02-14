import { Component, OnInit } from '@angular/core';
import { ReportService } from './services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  public list: any[] = [];

  constructor(
    private myService: ReportService
  ) { }

  ngOnInit(): void {
    const self = this;
    self.myService.getReport().then( (data:any) => {
      if (data !== null) {
        this.list = this.myService.data.data
      }
    });
  }

}
