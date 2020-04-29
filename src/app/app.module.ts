import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {DataTablesModule} from 'angular-datatables';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { AuthService } from './services/auth.service';
import {TokenInterceptorService} from './services/token-interceptor.service';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { NotFoundComponent } from './not-found/not-found.component';
import { ODashboardComponent } from './odashboard/odashboard.component';
import { OplegendComponent } from './oplegend/oplegend.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import { SearchComponent } from './search/search.component';
import { OpfooterComponent } from './opfooter/opfooter.component';
import { OpheaderComponent } from './opheader/opheader.component';
import { HeaderComponent } from './header/header.component';
import { OptimelineComponent } from './optimeline/optimeline.component';
import { OpaccountformComponent } from './opaccountform/opaccountform.component';
import { OpaccountactivityComponent } from './opaccountactivity/opaccountactivity.component';
import { DormantsComponent } from './dormants/dormants.component';
import { OpassignedComponent } from './opassigned/opassigned.component';
import { OpfollowupsComponent } from './opfollowups/opfollowups.component';
import { OpclosuresComponent } from './opclosures/opclosures.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    ODashboardComponent,
    OplegendComponent,
    ProfileComponent,
    AccountComponent,
    SearchComponent,
    OpfooterComponent,
    OpheaderComponent,
    HeaderComponent,
    OptimelineComponent,
    OpaccountformComponent,
    OpaccountactivityComponent,
    DormantsComponent,
    OpassignedComponent,
    OpfollowupsComponent,
    OpclosuresComponent,
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StorageServiceModule,
    ChartsModule,
   
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
