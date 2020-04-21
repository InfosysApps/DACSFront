import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() selectedCustomer : Customer;
  // @Input() customers : Customer[];

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

}
