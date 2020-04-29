import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ODashboardComponent } from './odashboard/odashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import { SearchComponent } from './search/search.component';
import { DormantsComponent } from './dormants/dormants.component';
import { OpassignedComponent } from './opassigned/opassigned.component';
import { OpfollowupsComponent } from './opfollowups/opfollowups.component';
import { OpclosuresComponent } from './opclosures/opclosures.component';

const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full'},
  { path: 'Login', component: LoginComponent },
  { path: 'Signup', component: SignupComponent },
  { path: 'ODashboard', component: ODashboardComponent },
  { path: 'Profile', component: ProfileComponent },
  { path: 'Account', component: AccountComponent },
  { path: 'Search', component: SearchComponent },
  { path: 'Dormants', component: DormantsComponent },
  { path: 'Assigned', component: OpassignedComponent },
  { path: 'Followups', component: OpfollowupsComponent },
  { path: 'Closures', component: OpclosuresComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
