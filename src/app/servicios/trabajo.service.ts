import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Trabajo } from '../Trabajo';

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {

  private apiUrl = 'http://localhost:5001/trabajo'
  constructor(
    private http: HttpClient
  ) { }

  getTrabajos(): Observable<Trabajo[]>{
    
    return this.http.get<Trabajo[]>(this.apiUrl);
  }

}
