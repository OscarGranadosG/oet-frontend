import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './modules/admin/admin.component';
import { DriverComponent } from './modules/admin/pages/driver/driver.component';
import { HomeComponent } from './modules/admin/pages/home/home.component';
import { OwnerComponent } from './modules/admin/pages/owner/owner.component';
import { VehiclesComponent } from './modules/admin/pages/vehicles/vehicles.component';


const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  // { path: 'driver', component: DriverComponent },
  // { path: 'owner', component: OwnerComponent },
  // { path: 'vehicle', component: VehiclesComponent },

  // {
  //   path: '**',
  //   redirectTo: '/home'
  // }

  { path: '', redirectTo: '', pathMatch: 'full' },
  /** Admin */
  {
    path: '',
    // tslint:disable-next-line:object-literal-sort-keys
    component: AdminComponent,
    children: [{
      path: '',
      // tslint:disable-next-line:object-literal-sort-keys
      loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule),
    }],
  },
  { path: '*', redirectTo: 'admin/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



