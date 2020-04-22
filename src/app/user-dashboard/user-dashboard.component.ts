import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  customers : Customer[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getCustomers();
    console.log(this.customers);
  }

  getCustomers(): Customer[] {
    for(let i = 0; i < 3; i++) {
      let customer : Customer = new Customer();
      customer.name = "Sachin Kothavade";
      customer.email = "sachin@gmail.com";
      customer.contactNo = 1234567890;
      customer.assignedTo = "Amit Patange";
      this.customers.push(customer);
    }
    return this.customers;
  }
}
