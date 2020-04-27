import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-dormants',
  templateUrl: './dormants.component.html',
  styleUrls: ['./dormants.component.css']
})
export class DormantsComponent implements OnInit {
 
  public data = [
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'amit', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
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

  // datatable(){
  //   $(document).ready(function(){
  //     $('#example2').DataTable({
  //       "paging": true,
  //       "lengthChange": false,
  //       "searching": false,
  //       "ordering": true,
  //       "info": true,
  //       "autoWidth": false,
  //       "responsive": true,
  //     });
  // });
  // }

}
