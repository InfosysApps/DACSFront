import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';


@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {

  @Input() checkedAdmins : Admin;
  // @Input() checkedAdmins : Admin[];

  constructor(private router : Router) { }

  ngOnInit(): void {
    
    
    
  }

}
