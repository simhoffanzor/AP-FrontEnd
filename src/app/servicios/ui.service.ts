import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showProjectPhoto: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleShowProject():void{
    this.showProjectPhoto = !this.showProjectPhoto;
    this.subject.next(this.showProjectPhoto);
  }

  onToggle():Observable<any>{
    return this.subject.asObservable();
  }
}
