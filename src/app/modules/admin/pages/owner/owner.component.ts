import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {

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
