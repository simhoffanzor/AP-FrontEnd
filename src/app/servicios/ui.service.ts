import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAgregarExp: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAgregarExp():void{
    this.showAgregarExp = !this.showAgregarExp;
  }

  onToggle():Observable<any>{
    return this.subject.asObservable();
  }
}
