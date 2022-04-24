import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Formacion } from '../interfaces/Formacion';

const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class FormacionService {

  private apiUrl = 'http://localhost:8081'
  constructor(
    private http: HttpClient
  ) { }

  getEstudios(): Observable<Formacion[]>{
    
    return this.http.get<Formacion[]>(`${this.apiUrl}/verEstudios`);
  }

  deleteFormacion(formacion:Formacion):Observable<Formacion>{
    const url = `${this.apiUrl}/eliminarEstudio/${formacion.id}`
    return this.http.delete<Formacion>(url)
  }

  addForm(formacion:Formacion):Observable<Formacion>{
    return this.http.post<Formacion>(`${this.apiUrl}/newEstudio`, formacion, httpOptions)
  }

  editFor(formacion:Formacion):Observable<Formacion>{
    return this.http.put<Formacion>(
      `${this.apiUrl}/editarEstudio/${formacion.id}`, formacion, httpOptions)
  }
}
