import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/models/Driver';
import { DriverService } from './services/driver.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {

  public list: Driver[] = [];

  public theader = ['id', 'name', 'lastname', 'asdasd']
  public tbody = []

  constructor(
    private myService: DriverService
  ) { }

  ngOnInit(): void {
    const self = this;
    self.myService.getAll().then( (data:any) => {
      if (data !== null) {
        this.list = this.myService.data.data
      }
    });
  }

}
