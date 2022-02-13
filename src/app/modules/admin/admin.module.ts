import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from './pages/driver/driver.component';
import { HomeComponent } from './pages/home/home.component';
import { OwnerComponent } from './pages/owner/owner.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';



@NgModule({
  declarations: [
    DriverComponent, 
    HomeComponent, 
    OwnerComponent, 
    VehiclesComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
