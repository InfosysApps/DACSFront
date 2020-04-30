import { interval } from 'rxjs';

export enum FileStatus {
    NONE,
    SELECTED,
    VALIDATING,
    VALIDATION_FAILED,
    UPLOADING,
    UPLOAD_FAILED,
    EXTRACTING,
    EXTRACT_FAILED,
    SAVING_TO_DB,
    FAILED_SAVE_DB,
    SAVED_TO_DB,
    CANCELLED
}

export class FileUiImportModel {
    fileName: String;
    status: FileStatus;
    uploadPercentage: number;
    progressBarType: String;
    fileToUpload: File;
    message: String;
    fileSize: number;
    successMessageList: String[];


    validateAndUploadExcel() {
        this.validateExcel();
    }

    getFileStatus(): String {
        return FileStatus[this.status];
    }

    resetFileImport() {
        this.fileName = null;
        this.fileToUpload = null;
        this.progressBarType = "determinate";
        this.status = FileStatus.NONE;
        this.uploadPercentage = 0;
        this.fileSize = 0;
        this.message = null;
        this.successMessageList = [];
    }

    fileSelected() {
        this.fileName = this.fileToUpload.name;
        this.fileSize = this.fileToUpload.size;
        this.status = FileStatus.SELECTED;
        this.successMessageList.push("File Selected.");
    }

    getIfFailed(): Boolean {
        if (this.status == FileStatus.VALIDATION_FAILED || this.status == FileStatus.UPLOAD_FAILED || this.status == FileStatus.EXTRACT_FAILED || this.status == FileStatus.FAILED_SAVE_DB) {
            return true;
        }
        return false;
    }

    formatBytes(a, b = 2) { if (0 === a) return "0 Bytes"; const c = 0 > b ? 0 : b, d = Math.floor(Math.log(a) / Math.log(1024)); return parseFloat((a / Math.pow(1024, d)).toFixed(c)) + " " + ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][d] }

    private validateExcel() {
        this.progressBarType = "indeterminate";
        this.status = FileStatus.VALIDATING;
        this.uploadPercentage = 0;
        this.message = "Validating Excel Sheet";
        let xlsx_mime_type = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        let xls_mime_type = "application/vnd.ms-excel";
        let csv_mime_type = "text/csv";

        if (this.fileToUpload.type != xlsx_mime_type && this.fileToUpload.type != xls_mime_type && this.fileToUpload.type != csv_mime_type) {
            this.status = FileStatus.VALIDATION_FAILED;
            this.message = "Validation Failed. Not an Excel Sheet.";
            return;
        }
        if (this.fileToUpload.size >= 5000000) {
            this.status = FileStatus.VALIDATION_FAILED;
            this.message = "Validation Failed. Bigger than 5 MB";
            return;
        }
        this.successMessageList.push("File Validated.");
        this.uploadExcel();

    }

    private uploadExcel() {
        this.progressBarType = "determinate";
        this.status = FileStatus.UPLOADING;
        this.uploadPercentage = 0;
        this.message = "Uploading File to Server";
        this.startTimerDummyUpload(10);

        setTimeout(() => {
            this.successMessageList.push("File Uploaded.");
            this.serverExtract();
        },
            10000);
    }

    private startTimerDummyUpload(seconds: number) {
        const timer$ = interval(1000);
        var curSec = 0;

        const sub = timer$.subscribe((sec) => {
            this.uploadPercentage = sec * 100 / seconds;
            curSec = sec;

            if (curSec === seconds) {
                sub.unsubscribe();
            }
        });
    }

    private serverExtract() {
        this.progressBarType = "indeterminate";
        this.status = FileStatus.EXTRACTING
        this.uploadPercentage = 0;
        this.message = "Extracting Data from file";
        setTimeout(() => {
            this.successMessageList.push("File Extracted.");
            this.saveToDB();
        },
            2000);
    }

    private saveToDB() {
        this.progressBarType = "indeterminate";
        this.status = FileStatus.SAVING_TO_DB
        this.uploadPercentage = 0;
        this.message = "Saving extracted Data to DB";
        setTimeout(() => {
            this.status = FileStatus.SAVED_TO_DB
            this.successMessageList.push("Success. Data added from Excel to DB.");
            this.message = "Success. Data added from Excel";
        },
            2000);
    }
}