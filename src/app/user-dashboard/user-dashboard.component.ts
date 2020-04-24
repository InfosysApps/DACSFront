import { Component, OnInit } from '@angular/core';

import {NgxPaginationModule} from 'ngx-pagination';
import { Customer } from '../models/customer';
import { Account } from '../models/account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent  {
  title = 'Angular Pagination Tutorial';

  ngOnInit(): void {
    console.log('Application loaded. Initializing data.');
  }

  constructor() {}
}
