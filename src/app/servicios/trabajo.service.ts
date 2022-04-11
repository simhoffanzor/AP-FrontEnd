import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Trabajo } from '../Trabajo';

const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

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

  deleteTrabajo(trabajo:Trabajo):Observable<Trabajo>{
    const url = `${this.apiUrl}/${trabajo.id}`
    return this.http.delete<Trabajo>(url)
  }

  addExp(trabajo:Trabajo):Observable<Trabajo>{
    return this.http.post<Trabajo>(this.apiUrl, trabajo, httpOptions)
  }

}