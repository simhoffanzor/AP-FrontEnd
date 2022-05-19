import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Usuario } from '../interfaces/Usuario';

const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'https://ap-portfoliobackend.herokuapp.com'
  
  constructor(
    private http: HttpClient
  ) { }

  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.apiUrl}/verUsuario`);
  }

  editUsu(usuario:Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(
      `${this.apiUrl}/editarUsuario/${usuario.id}`, usuario, httpOptions)
  }
}
