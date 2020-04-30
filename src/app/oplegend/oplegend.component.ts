import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/upload/dialog/dialog.component';
import { ExportDialogComponent } from 'src/app/export/dialog/exportdialog.component';
import { UploadService } from 'src/app/upload/upload.service';
import { ExportService } from 'src/app/export/export.service';

//pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-oplegend',
  templateUrl: './oplegend.component.html',
  styleUrls: ['./oplegend.component.css']
})
export class OplegendComponent implements OnInit {
  @ViewChild('htmlData') htmlData:ElementRef;

  public isMenuOpen: string = "";
  public isODashboardActive = "";
  public isAccountActive : string = "";
  public isProfileActive : string = "";
  public isDormantsActive : string = "";
  public isAssignedActive : string = "";
  public isFollowupsActive : string = "";
  public isClosuresActive : string = "";
  public isSearchActive : string = "";

  constructor(private _router : Router,public dialog: MatDialog, public uploadService: UploadService,public exportService:ExportService) {
    if(this._router.url == "ODashboard")
    {
      this.isODashboardActive = "active";
    }
    else if(this._router.url == "/Search")
    {
      this.isSearchActive = "active";
    }
    else if(this._router.url == "/Dormants")
    {
      this.isDormantsActive = "active";
    }
    else if(this._router.url == "/Assigned")
    {
      this.isAssignedActive = "active";
    }
    else if(this._router.url == "/Followups")
    {
      this.isFollowupsActive = "active";
    }
    else if(this._router.url == "/Closures")
    {
      this.isClosuresActive = "active";
    }
    else if(this._router.url == "/Profile")
    {
      this.isProfileActive = "active";
      this.isMenuOpen = "menu-open";
    }
    else if(this._router.url == "/Account")
    {
      this.isAccountActive = "active";
      this.isMenuOpen = "menu-open";
    }
   }

  ngOnInit(): void {
  }

  public openPDF():void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p','pt', 'a4');
    doc.fromHTML(DATA.innerHTML,15,15);
    doc.output('dataurlnewwindow');
  }
  public downloadPDF():void {
    
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p','pt', 'a4');

    doc.co
    let handleElement = {
      '#editor':function(element,renderer){
        return true;
      } 
    };
    doc.fromHTML(DATA.innerHTML,15,15,{
      'width': 200,
      'elementHandlers': handleElement
    });

    doc.save('angular-demo.pdf');
  }

  public generatePdf():void{
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
      var dd = {
        content: [
          {
            
            
            //layout: 'lightHorizontalLines', // optional
            table: {
              // headers are automatically repeated if the table spans over multiple pages
              // you can declare how many rows should be treated as headers
              headerRows: 1,
             
              
              widths: ['auto', 'auto', 'auto', 'auto','auto','auto','auto','auto','auto'],
              
              body: [              
                [{ text:'Id' ,fontSize:8},{ text:'CustomerUniqueId', fontSize:8},{ text:'FirstName', fontSize:8},{ text:'LastName', fontSize:8},{ text:'Gender', fontSize:8},{ text:'DOB', fontSize:8},{ text:'Age', fontSize:8},{ text:'Address', fontSize:8},{ text:'EmailId',fontSize:8}],
                [{ text:'69ae523e',fontSize:8},{ text:'Ankush_123', fontSize:8},{ text:'Ankush', fontSize:8},{ text:'Apte', fontSize:8},{ text:'Male', fontSize:8},{ text:'03-02-1982',fontSize:8},{ text:'37',fontSize:8},{ text:'Dange Chowk',fontSize:8},{ text:'ankush.apte@gmail.com',fontSize:8}],
                [{ text:'69ae523e',fontSize:8},{ text:'Ankush_123', fontSize:8},{ text:'Ankush', fontSize:8},{ text:'Apte', fontSize:8},{ text:'Male', fontSize:8},{ text:'03-02-1982',fontSize:8},{ text:'37',fontSize:8},{ text:'Dange Chowk',fontSize:8},{ text:'ankush.apte@gmail.com',fontSize:8}],
               
                [{ text:'69ae523e',fontSize:8},{ text:'Ankush_123', fontSize:8},{ text:'Ankush', fontSize:8},{ text:'Apte', fontSize:8},{ text:'Male', fontSize:8},{ text:'03-02-1982',fontSize:8},{ text:'37',fontSize:8},{ text:'Dange Chowk',fontSize:8},{ text:'ankush.apte@gmail.com',fontSize:8}],
               
                [{ text:'69ae523e',fontSize:8},{ text:'Ankush_123', fontSize:8},{ text:'Ankush', fontSize:8},{ text:'Apte', fontSize:8},{ text:'Male', fontSize:8},{ text:'03-02-1982',fontSize:8},{ text:'37',fontSize:8},{ text:'Dange Chowk',fontSize:8},{ text:'ankush.apte@gmail.com',fontSize:8}],
               
                [{ text:'69ae523e',fontSize:8},{ text:'Ankush_123', fontSize:8},{ text:'Ankush', fontSize:8},{ text:'Apte', fontSize:8},{ text:'Male', fontSize:8},{ text:'03-02-1982',fontSize:8},{ text:'37',fontSize:8},{ text:'Dange Chowk',fontSize:8},{ text:'ankush.apte@gmail.com',fontSize:8}]
               
              ]
            
            }
          }
        ]
      }  
        
     
      //pdfMake.createPdf(dd).open();
    pdfMake.createPdf(dd).download();
  };


  public importpdf():void{
    let dialogRef = this.dialog.open(DialogComponent, { width: '50%', height: '50%' });
  }

  public exportpdf():void{
    let dialogRef = this.dialog.open(ExportDialogComponent, { width: '50%', height: '50%' });
  }


  }



