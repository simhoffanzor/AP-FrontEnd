import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Proyecto } from '../Proyecto';

const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private apiUrl = 'http://localhost:5001/proyecto'
  constructor(
    private http: HttpClient
  ) { }

  getProyectos(): Observable<Proyecto[]>{
    
    return this.http.get<Proyecto[]>(this.apiUrl);
  }

  deleteProyecto(proyecto:Proyecto):Observable<Proyecto>{
    const url = `${this.apiUrl}/${proyecto.id}`
    return this.http.delete<Proyecto>(url)
  }

  addProy(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.post<Proyecto>(this.apiUrl, proyecto, httpOptions)
  }
}
