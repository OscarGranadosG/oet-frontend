import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from './pages/driver/driver.component';
import { HomeComponent } from './pages/home/home.component';
import { OwnerComponent } from './pages/owner/owner.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { AdminComponent } from './admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminLayoutRoutes } from './admin.routing';



@NgModule({
  declarations: [
    DriverComponent, 
    HomeComponent, 
    OwnerComponent, 
    VehiclesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    SharedModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    RouterModule,
  ]
})
export class AdminModule { }
