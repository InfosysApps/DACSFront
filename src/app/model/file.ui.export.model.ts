
import { MatTableDataSource } from '@angular/material/table';

export interface SelectModel {
    value: string;
    viewValue: string;
}

export class FileUiExportModel {
    fromDateValue: Date;
    fromDateValid: Boolean;
    toDateValue: Date;
    toDateValid: Boolean;
    typeAllowed: SelectModel[];
    typeSelected: String;
    exportedFile: any;
   
    customerFilter: String;
    errMessage: String;
    
}