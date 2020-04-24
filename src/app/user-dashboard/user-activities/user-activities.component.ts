import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { CustomerAccountService } from 'src/app/services/customer-account.service';

@Component({
  selector: 'app-user-activities',
  templateUrl: './user-activities.component.html',
  styleUrls: ['./user-activities.component.css']
})
export class UserActivitiesComponent implements OnInit {

  p1 : number = 1;
  count1 : number = 5;
  myCustomers : Customer[] = [];

  constructor(private router : Router, private customerAccountService : CustomerAccountService) { }

  ngOnInit(): void {
    this.myCustomers = this.customerAccountService.getMyCustomers();
  }

  displayDetails(customer : Customer) {
    let id : number;
    id = customer.id;
    this.router.navigate(['/Details', id]);
  }
}
