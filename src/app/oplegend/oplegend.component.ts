import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperatorService } from '../services/operator.service';
import { Operator } from '../models/operator';

@Component({
  selector: 'app-oplegend',
  templateUrl: './oplegend.component.html',
  styleUrls: ['./oplegend.component.css']
})
export class OplegendComponent implements OnInit {
  public isMenuOpen: string = "";
  public isODashboardActive = "";
  public isAccountActive : string = "";
  public isProfileActive : string = "";
  public isDormantsActive : string = "";
  public isAssignedActive : string = "";
  public isFollowupsActive : string = "";
  public isClosuresActive : string = "";
  public isSearchActive : string = "";

  public operator : Operator = new Operator();

  constructor(private _router : Router, private operatorService : OperatorService) {
    if(this._router.url == "ODashboard")
    {
      this.isODashboardActive = "active";
    }
    else if(this._router.url == "/Search")
    {
      this.isSearchActive = "active";
    }
    else if(this._router.url == "/Dormants")
    {
      this.isDormantsActive = "active";
    }
    else if(this._router.url == "/Assigned")
    {
      this.isAssignedActive = "active";
    }
    else if(this._router.url == "/Followups")
    {
      this.isFollowupsActive = "active";
    }
    else if(this._router.url == "/Closures")
    {
      this.isClosuresActive = "active";
    }
    else if(this._router.url == "/Profile")
    {
      this.isProfileActive = "active";
      this.isMenuOpen = "menu-open";
    }
    else if(this._router.url == "/Account")
    {
      this.isAccountActive = "active";
      this.isMenuOpen = "menu-open";
    }
   }

  ngOnInit(): void {
    this.getOperatorInfo();
  }

  getOperatorInfo() {
    this.operatorService.getOperatorInfo()
      .subscribe(response => {
        if(response.responseobj.getstatus) {
          this.operator = response.responseobj.operator;
        }
      })
  }

  getOperatorName() {
    return this.operator.LastName + ", " + this.operator.FirstName;
  }
}
