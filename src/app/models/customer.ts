import { Account } from './account';

export class Customer {
    id : number;
    name : string;
    contactNo : string;
    email : string;
    gender : string;
    nationality : string;
    assignedTo : string;
    account : Account;
    // constructor(name : string, email : string, contactNo : number, assignedTo : string) {
    //     this.name = name;
    //     this.email = email;
    //     this.contactNo = contactNo;
    //     this.assignedTo = assignedTo;
    // }
}
