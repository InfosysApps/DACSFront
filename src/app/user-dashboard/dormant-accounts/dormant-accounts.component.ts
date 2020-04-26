import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import {NgxPaginationModule} from 'ngx-pagination';
import { CustomerAccountService } from 'src/app/services/customer-account.service';
import { Observable } from 'rxjs';
import { SortableDirective, SortEvent } from 'src/app/models/sortable.directive';

@Component({
  selector: 'app-dormant-accounts',
  templateUrl: './dormant-accounts.component.html',
  styleUrls: ['./dormant-accounts.component.css']
})
export class DormantAccountsComponent implements OnInit {

  customers : Customer[] = [];

  customers$: Observable<Customer[]>;
  total$: Observable<number>;

  @ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;

  constructor(private router : Router, public customerAccountService : CustomerAccountService) { 
    this.customers$ = customerAccountService.customers$;
    this.total$ = customerAccountService.total$;
  }

  ngOnInit(): void {
    this.customers = this.customerAccountService.getCustomers();
    this.customerAccountService.initializeCustomers(1);
  }

  onSort({column, direction}: SortEvent) {

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.customerAccountService.sortColumn = column;
    this.customerAccountService.sortDirection = direction;
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
