import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Proyecto } from '../interfaces/Proyecto';

const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private apiUrl = 'https://ap-portfoliobackend.herokuapp.com'
  constructor(
    private http: HttpClient
  ) { }

  getProyectos(): Observable<Proyecto[]>{
    
    return this.http.get<Proyecto[]>(`${this.apiUrl}/verProyectos`);
  }

  deleteProyecto(proyecto:Proyecto):Observable<Proyecto>{
    const url = `${this.apiUrl}/eliminarProyecto/${proyecto.id}`
    return this.http.delete<Proyecto>(url)
  }

  addProy(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.post<Proyecto>(`${this.apiUrl}/newProyecto`, proyecto, httpOptions)
  }

  editProy(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.put<Proyecto>(
      `${this.apiUrl}/editarProyecto/${proyecto.id}`, proyecto, httpOptions)
  }
}
