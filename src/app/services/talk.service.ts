import { Injectable, Inject } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class TalkService {

  constructor() { }

  private SweetAlert(p : TalkParam) : void {
    Swal.fire({
      title: p.Title,
      text: p.Text,
      icon: p.Icon,
      confirmButtonText: p.ConfirmButtonText
    });
  }

  /**
   * Success
   */ 
  public Success(p : TalkParam) : void  {
    this.SweetAlert(p);
  }

  /**
   * Failure
   */
  public Failure(p : TalkParam) : void {
    this.SweetAlert(p);
  }
}

export class TalkParam {
  public Title : string;

  public Text : string;

  public Icon : SweetAlertIcon;

  public ConfirmButtonText : string;

  public constructor(
    params?: {
        Title?: string,
        Text?: string,
        Icon?: SweetAlertIcon,
        ConfirmButtonText?: string
    }) {
    if (params) Object.assign(this, params);
}
};
