import { Component, OnInit } from '@angular/core';
import { Owner } from '../../../../models/owner';
import { OwnerService } from './services/owner.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {

  public theader = ['id', 'name', 'lastname', 'asdasd']
  public tbody = []

  public list: Owner[] = [];


  constructor(
    private myService: OwnerService
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
