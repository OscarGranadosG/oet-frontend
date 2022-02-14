import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../../../models/vehicle';
import { VehicleService } from './services/vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  public theader = ['id', 'name', 'lastname', 'asdasd']
  public tbody = []

  public list: Vehicle[] = [];


  constructor(
    private myService: VehicleService
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
