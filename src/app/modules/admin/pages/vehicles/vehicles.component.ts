import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  public theader = ['id', 'name', 'lastname', 'asdasd']
  public tbody = [
    {
      id:0,
      name:'asdasd',
      lastname:'asdasd',
      meme:'asdasd',
    },
    {
      id:0,
      name:'asdasd',
      lastname:'asdasd',
      meme:'asdasd',
    },
    {
      id:0,
      name:'asdasd',
      lastname:'asdasd',
      meme:'asdasd',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
