import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { Account } from 'src/app/models/account';
import { CustomerAccountService } from 'src/app/services/customer-account.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  selectedCustomer : Customer;
  id : number;
  customersdata = [];
  customers : Customer[] = [];

  constructor(private router : Router, private route : ActivatedRoute,
    private customerAccountService : CustomerAccountService) { }

  ngOnInit(): void {
    this.customers = this.customerAccountService.getCustomers();
    this.route.params.subscribe(param => this.id = param['id'])
    console.log(this.id);
    this.getSelectedCustomer(this.id);
  }

  getSelectedCustomer(id : number) {
    for (let customer of this.customers) {
      if(customer.id == id) {
        this.selectedCustomer = customer;
      }
    }
  }

  goBack() {
    this.router.navigate(['/UserDashboard']);
  }
}
