import { Component, Inject } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DACSFront';
  showheader :any = false;
  public data = [
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
];

//title = 'angulardatatables';
dtOptions: DataTables.Settings = {};


  constructor(private _router : Router)
  {
    _router.events.forEach((event) => {
      if(event instanceof NavigationStart)
      {
        if(event['url'] == '/Login' || event['url'] == '')
        {
          this.showheader = true; 
        }
        else{
          this.showheader = false;
        }
      }
    })
  }





}
