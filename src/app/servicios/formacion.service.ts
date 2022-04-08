import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Formacion } from '../Formacion';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {

  private apiUrl = 'http://localhost:5001/estudio'
  constructor(
    private http: HttpClient
  ) { }

  getEstudios(): Observable<Formacion[]>{
    
    return this.http.get<Formacion[]>(this.apiUrl);
  }
}
