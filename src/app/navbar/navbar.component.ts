import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  page1() {
    console.log("Inside page1 function");
  }

  page2() {
    console.log("Inside page2 function");
  }

  page3() {
    console.log("Inside page3 function");
  }

  contactUs() {
    console.log("Inside contactUs function");
  }

  logout() {
    this.router.navigate(['/Login']);
    localStorage.removeItem('isLoggedIn');
  }
}
