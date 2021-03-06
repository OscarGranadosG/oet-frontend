import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DriverService } from '../services/driver.service';


@Component({
  selector: 'app-form-driver',
  templateUrl: './form-driver.component.html',
  styleUrls: ['./form-driver.component.scss']
})
export class FormDriverComponent implements OnInit {

  document = new FormControl('', [Validators.required]);
  first_name = new FormControl('', [Validators.required]);
  second_name = new FormControl('');
  last_name = new FormControl('', [Validators.required]);
  address = new FormControl('');
  phone = new FormControl('', [Validators.required]);
  city = new FormControl('');


  checkoutForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private myService: DriverService,
    public router: Router,
  ) {
    this.checkoutForm = this.formBuilder.group({
      document: [ '', Validators.required ],
      first_name: [ '', Validators.required ],
      second_name: [''],
      last_name: [ '', Validators.required ],
      address: [''],
      phone: [ '', Validators.required ],
      city: [''],
    });
   }

  ngOnInit(): void {
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
    this.router.navigateByUrl('/driver');
  }

  getErrorMessageDocument = () => {
    if (this.document.hasError('required')) {
      return 'Escribe el numero de documento';
    } else {
      return ''
    }
  }

  getErrorMessageFirstName = () => {
    if (this.first_name.hasError('required')) {
      return 'Escribe el nombre';
    } else {
      return ''
    }
  }

  getErrorMessagePhone = () => {
    if (this.phone.hasError('required')) {
      return 'Escribe un numero de telefono';
    } else {
      return ''
    }
  }

  getErrorMessageLastName = () => {
    if (this.last_name.hasError('required')) {
      return 'Escribe el apellido';
    } else {
      return ''
    }
  }

  

  



}
