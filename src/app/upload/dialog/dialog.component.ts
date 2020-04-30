import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UploadService } from '../upload.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @ViewChild('file', { static: false }) file;

  public files: Set<File> = new Set();

  constructor(public dialogRef: MatDialogRef<DialogComponent>, public uploadService: UploadService) { }

  ngOnInit() { }

  progress;
  canBeClosed = true;
  primaryButtonText = 'Upload';
  showCancelButton = true;
  uploading = false;
  uploadSuccessful = false;
  addedfile :File;
  message;
  onFilesAdded() {

    this.uploadSuccessful = false;
    
    const files: { [key: string]: File } = this.file.nativeElement.files;
    
    
    let xlsx_mime_type = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        let xls_mime_type = "application/vnd.ms-excel";
        let csv_mime_type = "text/csv";

        this.message = "";
       let fileval:File;
        
    for (let key in files) {
   
      if (!isNaN(parseInt(key))) {
        fileval=files[key];
        if (fileval.type != xlsx_mime_type && fileval.type != xls_mime_type && fileval.type != csv_mime_type) {
           
          this.message = fileval.name+" Validation Failed. Not an Excel Sheet.";
          
          return;
      }
      if (fileval.size >= 5000000) {
         
          this.message = fileval.name +"Validation Failed. Bigger than 5 MB";
          
          return;
      }

               this.files.add(files[key]);
      }
      
    }
  }

  addFiles() {

    this.addedfile=this.file;

    this.file.nativeElement.click();
    
          
  }

  closeDialog() {
    // if everything was uploaded already, just close the dialog
    if (this.uploadSuccessful) {
      return this.dialogRef.close();
    }

    // set the component state to "uploading"
    this.uploading = true;

    // start the upload and save the progress map
    //this.progress = this.uploadService.upload(this.files);

    

    //console.log(this.progress);
   /* for (const key in this.progress) {
      this.progress[key].progress.subscribe(val => console.log(val));
    }*/

    // convert the progress map into an array
    let allProgressObservables = [];
    /*for (let key in this.progress) {
      allProgressObservables.push(this.progress[key].progress);
    }*/

    // Adjust the state variables

    // The OK-button should have the text "Finish" now
    this.primaryButtonText = 'Finish';

    // The dialog should not be closed while uploading
    this.canBeClosed = false;
    this.dialogRef.disableClose = true;

    // Hide the cancel-button
    this.showCancelButton = false;

    // When all progress-observables are completed...
   /* forkJoin(allProgressObservables).subscribe(end => {
      // ... the dialog can be closed again...
      this.canBeClosed = true;
      this.dialogRef.disableClose = false;

      // ... the upload was successful...
      this.uploadSuccessful = true;

      // ... and the component is no longer uploading
      this.uploading = false;
    });*/
    this.uploadSuccessful = true;
    this.canBeClosed = true;
    this.dialogRef.disableClose = false;
    this.uploading = false;
  }
}
