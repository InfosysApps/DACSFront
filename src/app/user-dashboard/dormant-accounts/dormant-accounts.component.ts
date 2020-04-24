import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import {NgxPaginationModule} from 'ngx-pagination';
import { CustomerAccountService } from 'src/app/services/customer-account.service';

@Component({
  selector: 'app-dormant-accounts',
  templateUrl: './dormant-accounts.component.html',
  styleUrls: ['./dormant-accounts.component.css']
})
export class DormantAccountsComponent implements OnInit {

  p2: number = 1;
  count2: number = 5;
  customers : Customer[] = [];

  constructor(private router : Router, private customerAccountService : CustomerAccountService) { }

  ngOnInit(): void {
    this.customers = this.customerAccountService.getCustomers();
  }

  displayDetails(customer : Customer) {
    let id : number;
    id = customer.id;
    this.router.navigate(['/Details', id]);
  }

  checkAssignedTo(customer : Customer) {
    let assignedTo : string;
    assignedTo = customer.assignedTo;
    if (assignedTo == "Unassigned") {
      return true;
    } else {
      return false;
    }
  }

  assignToUser(customer : Customer) {
    console.log("Inside assignToUser");
    let id : number = customer.id;
    console.log(id);
    for (let customerI of this.customers) {
      if (customerI.id == customer.id) {
        customerI.assignedTo = "Komal Kadam";
      }
    }
  }
}
