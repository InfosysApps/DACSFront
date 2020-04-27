import { Component, OnInit,Input} from '@angular/core';
import { Admin } from '../models/Admin';
import { Router } from '@angular/router';
@Component({
  selector: 'app-approverdetails',
  templateUrl: './approverdetails.component.html',
  styleUrls: ['./approverdetails.component.css']
})
export class ApproverdetailsComponent implements OnInit {
  @Input() selectedAdmin : Admin;

  comment :string="";
  
  constructor(private router : Router) { }

  ngOnInit(): void {
  }


  approve(){

    if(this.comment==""){
      alert("Comment is Required");
    }
    else{
      alert("record Approved successfully..!")
      
   }
 }

 


 reject(){
   if(this.comment==""){
     alert("Comment is Required");
   }
   else{
     alert("record rejected successfully..!")
     this.router.navigate(['/AdminComponent']);
  }

}
}