import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-dormants',
  templateUrl: './dormants.component.html',
  styleUrls: ['./dormants.component.css']
})
export class DormantsComponent implements OnInit {
 
  public data = [
    {serial: '1', account: '5264872569', state:'California, LA', status:'Checklist Pending', 
    assignedtolastworkedon:'NA/Patange, Amit', lasttransactiondate:'2020-04-14 20:25', action:'Action' },

    {serial: '2', account: '5264872570', state:'Arizona, Phenoix', status:'On Hold', 
    assignedtolastworkedon:'NA/Patange, Amit', lasttransactiondate:'2020-04-14 20:25', action:'Action' },

    {serial: '3', account: '5264872571', state:'New York', status:'Schedule a Call', 
    assignedtolastworkedon:'NA/Kadam, Komal', lasttransactiondate:'2020-04-14 20:25', action:'Action' },

    {serial: '4', account: '5264872572', state:'Washington DC', status:'New', 
    assignedtolastworkedon:'NA/NA', lasttransactiondate:'2020-04-14 20:25', action:'Action' },

    {serial: '5', account: '5264872573', state:'Seatle, WA', status:'On Hold', 
    assignedtolastworkedon:'Tanishq Gupta/Patange, Amit', lasttransactiondate:'2020-04-14 20:25', action:'Action' },

    {serial: '6', account: '5264872574', state:'California, LA', status:'Schedule a Call', 
    assignedtolastworkedon:'NA/Patange, Amit', lasttransactiondate:'2020-04-14 20:25', action:'Action' },

    {serial: '7', account: '5264872575', state:'California, LA', status:'Schedule a Call', 
    assignedtolastworkedon:'NA/Patange, Amit', lasttransactiondate:'2020-04-14 20:25', action:'Action' },

    {serial: '8', account: '5264872576', state:'California, LA', status:'Schedule a Call', 
    assignedtolastworkedon:'NA/Patange, Amit', lasttransactiondate:'2020-04-14 20:25', action:'Action' },

    {serial: '9', account: '5264872577', state:'California, LA', status:'Checklist Pending', 
    assignedtolastworkedon:'NA/Patange, Amit', lasttransactiondate:'2020-04-14 20:25', action:'Action' },

    {serial: '10', account: '5264872578', state:'California, LA', status:'On Hold', 
    assignedtolastworkedon:'NA/Patange, Amit', lasttransactiondate:'2020-04-14 20:25', action:'Action' },
];

//title = 'angulardatatables';
dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
}
}
