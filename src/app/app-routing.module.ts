import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AccessGuardService } from './services/access-guard.service';
import { CustomerDetailsComponent } from './user-dashboard/customer-details/customer-details.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDetailsComponent } from './admin/admin-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  { path: 'Login', component: LoginComponent },
  { path: 'Signup', component: SignupComponent },
  { path: 'UserDashboard', component: UserDashboardComponent, canActivate:[AccessGuardService]},
  { path: 'Details/:id', component: CustomerDetailsComponent},
  { path: 'AdminDashboard', component: AdminComponent,canActivate:[AccessGuardService]},
  { path: 'ApprovedDetails', component: AdminDetailsComponent},
  { path: 'Home', component: HomeComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
