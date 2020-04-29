import { Component, OnInit, ɵConsole, ViewChild, ElementRef } from '@angular/core';
import { Injectable, Injector } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {UserProfileService} from '../services/user-profile.service';
import { SessionHelperService } from '../services/session-helper.service';
import { TalkService, TalkParam } from '../services/talk.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  public signupForm : FormGroup;
  public submitted : boolean = false;
  @ViewChild('emailid') mobilenumber: ElementRef;

  constructor(private _FormBuilder : FormBuilder,
    private _Router : Router,
    private _UserProfileService : UserProfileService,
    private _SessionHelper : SessionHelperService,
    private _Talk : TalkService,
    private _Injector:Injector) { }

  ngOnInit(): void {
    this.signupForm = this._FormBuilder.group({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      emailid: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(2)]),
      gender: new FormControl('', [Validators.required]),
      termsandconditions: new FormControl('', [Validators.required])
    },
    { updateOn: "blur" });
  }
  
  get f(){
    return this.signupForm.controls;
  }

  get emailid(): any { return this.signupForm.get('emailid'); }

  public SignupSubmit(form) 
  {  
    if(this.signupForm.valid)
    {
      //Give call to user profile service.
      let userRegData = this.CreateUserProfileData(this.signupForm.value);
      //validate all things 
    }
    else
    {
      Object.keys(this.signupForm.controls).forEach(field => { // {1}
        const control = this.signupForm.get(field);            // {2}
        control.markAsTouched({ onlySelf: true });             // {3}
      });
    }  
  }//SignupSubmit ends here.

  /**
   * CreateUserProfilePostMobileOrEmailVerification
   */
  private async CreateUserProfileData(userProfileReg) : Promise<any> {
    let response = this._UserProfileService.UserRegistrationPhaseI(userProfileReg).toPromise();
    
    return response;
  }
}
