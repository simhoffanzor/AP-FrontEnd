import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Usuario } from '../Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:5001/usuarios'
  constructor(
    private http: HttpClient
  ) { }

  getUsuarios(): Observable<Usuario[]>{
    
    return this.http.get<Usuario[]>(this.apiUrl);
  }
}
