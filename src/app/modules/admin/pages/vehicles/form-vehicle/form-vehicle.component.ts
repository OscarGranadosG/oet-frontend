import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Driver } from 'src/app/models/driver';
import { Owner } from 'src/app/models/owner';
import { DriverService } from '../../driver/services/driver.service';
import { OwnerService } from '../../owner/services/owner.service';
import { VehicleService } from '../services/vehicle.service';


@Component({
  selector: 'app-form-vehicle',
  templateUrl: './form-vehicle.component.html',
  styleUrls: ['./form-vehicle.component.scss']
})
export class FormVehicleComponent implements OnInit {



  license_plate = new FormControl('', [Validators.required]);
  color = new FormControl('');
  type = new FormControl('', [Validators.required]);
  driver_id = new FormControl('', [Validators.required]);
  owner_id = new FormControl('', [Validators.required]);

  checkoutForm: FormGroup;

  public listDriver: Driver[] = [];
  public listOwner: Owner[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private myService: VehicleService,
    private serviceDriver: DriverService,
    private serviceOwner: OwnerService,
    public router: Router,
  ) { 
    this.checkoutForm = this.formBuilder.group({
      license_plate: [ '', Validators.required ],
      color: [''],
      type: [ '', Validators.required ],
      driver_id: [ '', Validators.required ],
      owner_id: [ '', Validators.required ],
    });
  }

  ngOnInit(): void {
    this.serviceDriver.getAll().then( (data:any) => {
      if (data !== null) {
        this.listDriver = this.serviceDriver.data.data
      }
    }); 
    
    this.serviceOwner.getAll().then( (data:any) => {
      if (data !== null) {
        this.listOwner = this.serviceOwner.data.data
      }
    }); 

  }

  onSubmit(data: any) {
    this.myService.save(data).then(
      (data: any) => {
        if (data === true) {
          this.checkoutForm.reset();
          this.close();
        }
      }
    )
  }

  public close = () => {
    this.router.navigateByUrl('/vehicle');
  }

  getErrorMessageLicensePlate = () => {
    if (this.license_plate.hasError('required')) {
      return 'Escribe la placa del carro';
    } else {
      return ''
    }
  }

  getErrorMessageType = () => {
    if (this.type.hasError('required')) {
      return 'Elige el tipo del carro';
    } else {
      return ''
    }
  }

  getErrorMessageDriver = () => {
    if (this.driver_id.hasError('required')) {
      return 'Elige el conductor';
    } else {
      return ''
    }
  }

  getErrorMessageOwner = () => {
    if (this.owner_id.hasError('required')) {
      return 'Elige el propietario';
    } else {
      return ''
    }
  }

}
