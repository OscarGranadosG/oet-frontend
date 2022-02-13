import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriverComponent } from './modules/admin/pages/driver/driver.component';
import { HomeComponent } from './modules/admin/pages/home/home.component';
import { OwnerComponent } from './modules/admin/pages/owner/owner.component';
import { VehiclesComponent } from './modules/admin/pages/vehicles/vehicles.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'driver', component: DriverComponent },
  { path: 'owner', component: OwnerComponent },
  { path: 'vehicle', component: VehiclesComponent },

  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



