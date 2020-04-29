import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private _router : Router) {
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
  }

}
