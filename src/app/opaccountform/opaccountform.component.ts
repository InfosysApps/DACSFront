import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opaccountform',
  templateUrl: './opaccountform.component.html',
  styleUrls: ['./opaccountform.component.css']
})
export class OpaccountformComponent implements OnInit {

  hidden : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  enableClosureReason(e) {
    if (e.target.value == "Ready for Closure" || e.target.value == "Send for approval") {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }
}
