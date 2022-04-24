import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Trabajo } from '../interfaces/Trabajo';

const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {

  private apiUrl = 'http://localhost:8081'
  constructor(
    private http: HttpClient
  ) { }

  getTrabajos(): Observable<Trabajo[]>{
    
    return this.http.get<Trabajo[]>(`${this.apiUrl}/verTrabajos`);
  }

  deleteTrabajo(trabajo:Trabajo):Observable<Trabajo>{
    const url = `${this.apiUrl}/eliminarTrabajo/${trabajo.id}`
    return this.http.delete<Trabajo>(url)
  }

  addExp(trabajo:Trabajo):Observable<Trabajo>{
    return this.http.post<Trabajo>(`${this.apiUrl}/newTrabajo`, trabajo, httpOptions)
  }

  editExp(trabajo:Trabajo):Observable<Trabajo>{
    return this.http.put<Trabajo>(
      `${this.apiUrl}/editarTrabajo/${trabajo.id}`, trabajo, httpOptions)
  }
}