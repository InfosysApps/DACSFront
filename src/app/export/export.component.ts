import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExportDialogComponent } from './dialog/exportdialog.component';
import { ExportService } from './export.service';
import {MatSelectModule} from '@angular/material/select'

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent {
  constructor(public dialog: MatDialog, public uploadService: ExportService) { }

  public openExportDialog() {
    let dialogRef = this.dialog.open(ExportDialogComponent, { width: '50%', height: '50%' });
  }
}
