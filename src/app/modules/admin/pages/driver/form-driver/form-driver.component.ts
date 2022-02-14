import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-form-driver',
  templateUrl: './form-driver.component.html',
  styleUrls: ['./form-driver.component.scss']
})
export class FormDriverComponent implements OnInit {

  document = new FormControl('', [Validators.required]);
  first_name = new FormControl('', [Validators.required]);
  last_name = new FormControl('');
  address = new FormControl('');
  phone = new FormControl('', [Validators.required]);
  city = new FormControl('');


  checkoutForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      document: [ '', Validators.required ],
      first_name: [ '', Validators.required ],
      last_name: [ '' ],
      address: new FormControl(''),
      phone: new FormControl('', [Validators.required]),
      city: new FormControl(''),
    });
   }

  ngOnInit(): void {
  }

  onSubmit(data: any) {
    // Process checkout data here

    //this.checkoutForm.reset();
    console.log(data)
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

  



}
