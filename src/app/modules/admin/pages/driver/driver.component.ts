import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {

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
