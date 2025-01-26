import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  // { path: 'admin', component: AdminComponent, children:[
  //   { path: '', component: AdminDashboardComponent}
  // ] },
  { path: 'admin2', component: AdminComponent},
  { path: 'admin-dash', component: AdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
