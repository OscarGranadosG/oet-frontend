import { Routes } from '@angular/router';
import { DriverComponent } from './pages/driver/driver.component';
import { FormDriverComponent } from './pages/driver/form-driver/form-driver.component';
/** Pages */
import { HomeComponent } from './pages/home/home.component';
import { FormOwnerComponent } from './pages/owner/form-owner/form-owner.component';
import { OwnerComponent } from './pages/owner/owner.component';
import { ReportComponent } from './pages/report/report.component';
import { FormVehicleComponent } from './pages/vehicles/form-vehicle/form-vehicle.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';


export const AdminLayoutRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },

    { path: 'driver', component: DriverComponent },
    { path: 'driver/create', component: FormDriverComponent },

    { path: 'owner', component: OwnerComponent },
    { path: 'owner/create', component: FormOwnerComponent },

    { path: 'vehicle', component: VehiclesComponent },
    { path: 'vehicle/create', component: FormVehicleComponent },

    { path: 'report', component: ReportComponent },


    {
        path: '**',
        redirectTo: 'home'
    }
];
