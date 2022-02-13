import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  public sidebarRoutes:any = [];

  ngOnInit(): void {
    this.sidebarRoutes = [
      {route: 'home', icon: 'home', name: 'HOME'},
      {route: 'vehicle', icon: 'directions_car', name: 'VEHICULO'},
      {route: 'driver', icon: 'person_pin', name: 'CONDUCTOR'},
      {route: 'owner', icon: 'person', name: 'PROPIETARIO'},

    ]
  }

}
