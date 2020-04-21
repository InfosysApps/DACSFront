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
  customersdata = [];
  customers : Customer[] = [];
  myCustomers : Customer[] = [];
  selectedCustomer : Customer;
  p: number = 1;
  count: number = 5;
  p1: number = 1;
  count1: number = 5;
  pos: number = -1;
  showMyActivities : boolean = false;

  ngOnInit(): void {
    console.log('Application loaded. Initializing data.');
    this.initializeCustomerData();
    this.getCustomers();
    this.getMyCustomers();
  }

  constructor(private router : Router) {}

  initializeCustomerData() {
    this.customersdata = [
      { 'id': 1, 'name': 'Clare Cornau', 'phoneno': '(815) 6180492', 'email': 'ccornau0@bigcartel.com', 'gender': 'Female', 'nationality': 'Somalia', 'accountNo': 1001, 'accountType': 'Saving', 'assignedTo': 'Amit Patange' },
      { 'id': 2, 'name': 'Edouard Elsmore', 'phoneno': '(507) 3119958', 'email': 'eelsmore1@goo.gl', 'gender': 'Male', 'nationality': 'United States', 'accountNo': 1002, 'accountType': 'Saving', 'assignedTo': 'Unassigned' },
      { 'id': 3, 'name': 'Aeriel Elldred', 'phoneno': '(478) 7181722', 'email': 'aelldred2@archive.org', 'gender': 'Female', 'nationality': 'Russia', 'accountNo': 1003, 'accountType': 'Saving', 'assignedTo': 'Sachin Kothavade' },
      { 'id': 4, 'name': 'Abagael Meachem', 'phoneno': '(698) 4411762', 'email': 'ameachem3@columbia.edu', 'gender': 'Female', 'nationality': 'China', 'accountNo': 1004, 'accountType': 'Saving', 'assignedTo': 'Unassigned' },
      { 'id': 5, 'name': 'Jeremiah Hadwen', 'phoneno': '(345) 6582965', 'email': 'jhadwen4@vkontakte.ru', 'gender': 'Male', 'nationality': 'Mongolia', 'accountNo': 1005, 'accountType': 'Saving', 'assignedTo': 'Sachin Kothavade' },
      { 'id': 6, 'name': 'Rollin Wainscoat', 'phoneno': '(659) 9557733', 'email': 'rwainscoat5@thetimes.co.uk', 'gender': 'Male', 'nationality': 'Bhutan', 'accountNo': 1006, 'accountType': 'Saving', 'assignedTo': 'Unassigned' },
      { 'id': 7, 'name': 'Micah Braddock', 'phoneno': '(864) 2101861', 'email': 'mbraddock6@yellowbook.com', 'gender': 'Male', 'nationality': 'Peru', 'accountNo': 1007, 'accountType': 'Saving', 'assignedTo': 'Amit Patange' },
      { 'id': 8, 'name': 'Jayme Crotty', 'phoneno': '(165) 5814372', 'email': 'jcrotty7@opensource.org', 'gender': 'Male', 'nationality': 'Niger', 'accountNo': 1008, 'accountType': 'Saving', 'assignedTo': 'Sachin Kothavade' },
      { 'id': 9, 'name': 'Margo Braker', 'phoneno': '(428) 2282928', 'email': 'mbraker8@yahoo.co.jp', 'gender': 'Female', 'nationality': 'Argentina', 'accountNo': 1009, 'accountType': 'Saving', 'assignedTo': 'Unassigned' },
      { 'id': 10, 'name': 'Bertie Bosman', 'phoneno': '(673) 5170425', 'email': 'bbosman9@google.co.jp', 'gender': 'Female', 'nationality': 'Greece', 'accountNo': 1010, 'accountType': 'Saving', 'assignedTo': 'Sachin Kothavade' },
      { 'id': 11, 'name': 'Darelle Rowlands', 'phoneno': '(978) 8885907', 'email': 'drowlandsa@slate.com', 'gender': 'Female', 'nationality': 'Indonesia', 'accountNo': 1011, 'accountType': 'Saving', 'assignedTo': 'Amit Patange' },
      { 'id': 12, 'name': 'Neile Keets', 'phoneno': '(956) 9360112', 'email': 'nkeetsb@canalblog.com', 'gender': 'Female', 'nationality': 'Finland', 'accountNo': 1012, 'accountType': 'Saving', 'assignedTo': 'Unassigned' },
      { 'id': 13, 'name': 'Shari Bussen', 'phoneno': '(240) 7150720', 'email': 'sbussenc@so-net.ne.jp', 'gender': 'Female', 'nationality': 'Philippines', 'accountNo': 1013, 'accountType': 'Saving', 'assignedTo': 'Amit Patange' },
      { 'id': 14, 'name': 'Arron Drivers', 'phoneno': '(416) 4076124', 'email': 'adriversd@com.com', 'gender': 'Male', 'nationality': 'Bosnia and Herzegovina', 'accountNo': 1014, 'accountType': 'Saving', 'assignedTo': 'Unassigned' },
      { 'id': 15, 'name': 'Carola Balasin', 'phoneno': '(262) 7945277', 'email': 'cbalasine@blogger.com', 'gender': 'Female', 'nationality': 'Bolivia', 'accountNo': 1015, 'accountType': 'Saving', 'assignedTo': 'Sachin Kothavade' },
      { 'id': 16, 'name': 'Clarinda Barrick', 'phoneno': '(501) 3984600', 'email': 'cbarrickf@t-online.de', 'gender': 'Female', 'nationality': 'China', 'accountNo': 1016, 'accountType': 'Saving', 'assignedTo': 'Amit Patange' },
      { 'id': 17, 'name': 'Inglis Treweela', 'phoneno': '(718) 4157883', 'email': 'itreweelag@tripod.com', 'gender': 'Male', 'nationality': 'Finland', 'accountNo': 1017, 'accountType': 'Saving', 'assignedTo': 'Unassigned' },
      { 'id': 18, 'name': 'Yardley Georgeot', 'phoneno': '(213) 5730967', 'email': 'ygeorgeoth@360.cn', 'gender': 'Male', 'nationality': 'Portugal', 'accountNo': 1018, 'accountType': 'Saving', 'assignedTo': 'Amit Patange' },
      { 'id': 19, 'name': 'Hestia Palffrey', 'phoneno': '(349) 6453938', 'email': 'hpalffreyi@nba.com', 'gender': 'Female', 'nationality': 'Madagascar', 'accountNo': 1019, 'accountType': 'Saving', 'assignedTo': 'Sachin Kothavade' },
      { 'id': 20, 'name': 'Gwendolyn Mordon', 'phoneno': '(474) 3068249', 'email': 'gmordonj@uiuc.edu', 'gender': 'Female', 'nationality': 'Greece', 'accountNo': 1020, 'accountType': 'Saving', 'assignedTo': 'Unassigned' }
    ];
  }

  getCustomers() {
    for(let customerData of this.customersdata) {
      let customer : Customer = new Customer();
      customer.id = customerData.id;
      customer.name = customerData.name;
      customer.contactNo = customerData.phoneno;
      customer.email = customerData.email;
      customer.gender = customerData.gender;
      customer.nationality = customerData.nationality;
      customer.assignedTo = customerData.assignedTo;
      let account : Account = new Account();
      account.accountNumber = customerData.accountNo;
      account.accountType = customerData.accountType;
      customer.account = account;
      this.customers.push(customer);
    }
  }

  getMyCustomers() {
    for (let customer of this.customers) {
      if (customer.assignedTo == "Sachin Kothavade") {
        this.myCustomers.push(customer);
      }
    }
  }

  displayDetails(customer : Customer) {
    console.log(customer.id);
    this.pos = customer.id;
    this.selectedCustomer = customer;
    // this.router.navigate(['/Details']);
  }

  goBack() {
    this.pos = -1;
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

  assignToUser(selectedCustomer : Customer) {
    let id : number = selectedCustomer.id;
    for (let customer of this.customers) {
      if (customer.id == selectedCustomer.id) {
        customer.assignedTo = "Komal Kadam";
      }
    }
  }

  showAssignedToMe() {
    this.showMyActivities = true;
  }

  showAllActivities() {
    this.showMyActivities = false;
  }
}
