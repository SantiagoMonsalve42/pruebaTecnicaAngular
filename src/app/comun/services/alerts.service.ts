import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  constructor() { }
  static SuccessAlert(title: string, subTitle: string){
    Swal.fire(
      title,
      subTitle,
      'success'
    )
  }
  static InfoAlert(title: string, subTitle: string){
    Swal.fire(
      title,
      subTitle,
      'info'
    )
  }
  static WarningAlert(title: string, subTitle: string){
    Swal.fire(
      title,
      subTitle,
      'warning'
    )
  }
  static ErrorAlert(title: string, subTitle: string){
    Swal.fire(
      title,
      subTitle,
      'error'
    )
  }
  static DialogAlert(message: string): Promise<boolean>{
    return Swal.fire({
      title: message,
      icon: 'warning',
      confirmButtonColor: "#3085d6",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "OK",
      denyButtonText: `CANCELAR`
    }).then((result) => {
      if (result.isConfirmed) {
        return true;
      } 
      return false;
    });
  }
}
