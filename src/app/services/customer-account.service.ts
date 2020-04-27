import { Injectable, PipeTransform } from '@angular/core';
import { Customer } from '../models/customer';
import { Account } from '../models/account';
import { SortDirection } from '../models/sortable.directive';
import { BehaviorSubject, Subject, Observable, of } from 'rxjs';
import { tap, debounceTime, switchMap, delay } from 'rxjs/operators';
import { DecimalPipe } from '@angular/common';

interface SearchResult {
  customers: Customer[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: string;
  sortDirection: SortDirection;
}

function compare(v1, v2) {
  return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}

function sort(customers: Customer[], column: string, direction: string): Customer[] {
  if (direction === '') {
    return customers;
  } else {
    return [...customers].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(customer: Customer, term: string, pipe: PipeTransform) {
  return pipe.transform(customer.id).includes(term)
    || customer.name.toLowerCase().includes(term)
    || customer.contactNo.includes(term)
    || customer.email.toLowerCase().includes(term)
    || customer.gender.toLowerCase().includes(term)
    || customer.assignedTo.toLowerCase().includes(term);
}

@Injectable({
  providedIn: 'root'
})
export class CustomerAccountService {

  customers : Customer[] = [];
  myCustomers : Customer[] = [];

  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _customers$ = new BehaviorSubject<Customer[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 5,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(private pipe : DecimalPipe) { 
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._customers$.next(result.customers);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get customers$() { return this._customers$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }
  set searchTerm(searchTerm: string) { this._set({searchTerm}); }
  set sortColumn(sortColumn: string) { this._set({sortColumn}); }
  set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const {sortColumn, sortDirection, pageSize, page, searchTerm} = this._state;

    // 1. sort
    let customers = sort(this.customers, sortColumn, sortDirection);

    // 2. filter
    customers = customers.filter(customer => matches(customer, searchTerm, this.pipe));
    const total = customers.length;

    // 3. paginate
    customers = customers.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({customers, total});
  }

  initializeCustomers(n : number) {
    if (n == 1) {
      console.log(n);
      this.customers = this.getCustomers();
    } else {
      console.log(n);
      this.customers = this.getMyCustomers();
    }
  }

  initializeCustomerData() {
    let customersData = [
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
    return customersData;
  }

  getCustomers() {
    let customersData = this.initializeCustomerData();
    let customers : Customer[] = [];
    for(let customerData of customersData) {
      let customer : Customer = new Customer();
      customer.id = customerData.id;
      customer.name = customerData.name;
      customer.contactNo = customerData.phoneno;
      customer.email = customerData.email;
      customer.gender = customerData.gender;
      // customer.nationality = customerData.nationality;
      customer.assignedTo = customerData.assignedTo;
      let account : Account = new Account();
      account.accountNumber = customerData.accountNo;
      account.accountType = customerData.accountType;
      customer.account = account;
      customers.push(customer);
    }
    return customers;
  }

  getMyCustomers() {
    let customers = this.getCustomers();
    let myCustomers : Customer[] = [];
    for (let customer of customers) {
      if (customer.assignedTo == "Sachin Kothavade") {
        myCustomers.push(customer);
      }
    }
    return myCustomers;
  }
}
