import { Component, OnInit } from '@angular/core';
import { TalkService, TalkParam } from '../services/talk.service';

@Component({
  selector: 'app-opheader',
  templateUrl: './opheader.component.html',
  styleUrls: ['./opheader.component.css']
})
export class OpheaderComponent implements OnInit {

  constructor(private talkService : TalkService) { }

  ngOnInit(): void {
  }

  contactTeam() {
    this.talkService.Success(new TalkParam({
      Title: "Vikrant Shelatkar", 
      Text:"Email Id: vikrant_shelatkar@bankops.com, " + "Contact No.:- +918082013399", 
      Icon: "success", 
      ConfirmButtonText:"Proceed"}));
  }

}
