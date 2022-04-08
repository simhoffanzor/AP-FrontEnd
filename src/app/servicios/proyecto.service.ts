import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Proyecto } from '../Proyecto';

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
}
