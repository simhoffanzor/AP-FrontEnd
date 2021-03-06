import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showEdit: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleEdit():void{
    this.showEdit = !this.showEdit;
    this.subject.next(this.showEdit);
    console.log("El servicio dice que esto es " +this.showEdit);
  }

  estadoBool():boolean{
    return this.showEdit;
  }
}