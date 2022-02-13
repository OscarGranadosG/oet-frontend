import { Routes } from '@angular/router';
import { DriverComponent } from './pages/driver/driver.component';
/** Pages */
import { HomeComponent } from './pages/home/home.component';
import { OwnerComponent } from './pages/owner/owner.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';


export const AdminLayoutRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'driver', component: DriverComponent },
    { path: 'owner', component: OwnerComponent },
    { path: 'vehicle', component: VehiclesComponent },
    {
        path: '**',
        redirectTo: 'home'
    }
];
