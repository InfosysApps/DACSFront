import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { AuthService } from './services/auth.service';
import {TokenInterceptorService} from './services/token-interceptor.service';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CustomerDetailsComponent } from './user-dashboard/customer-details/customer-details.component';
// import { DormantAccountsComponent } from './user-dashboard/dormant-accounts/dormant-accounts.component';
// import { UserActivitiesComponent } from './user-dashboard/user-activities/user-activities.component';
import { CustomerFeedbackComponent } from './user-dashboard/customer-feedback/customer-feedback.component';
import {AdminComponent} from './admin/admin.component';
import {AdminDetailsComponent} from './admin/admin-details.component';
import { ApproverdetailsComponent } from './approverdetails/approverdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    UserDashboardComponent,
    NavbarComponent,
    CustomerDetailsComponent,
    // DormantAccountsComponent,
    // UserActivitiesComponent,
    CustomerFeedbackComponent,
    AdminComponent,
    AdminDetailsComponent,
    ApproverdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StorageServiceModule,
    NgxPaginationModule,
  ],
  providers: [AuthService, 
    {
    provide:HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
