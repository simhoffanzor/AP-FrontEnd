import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Skill } from '../Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private apiUrl = 'http://localhost:5001/skill'
  constructor(
    private http: HttpClient
  ) { }

  getSkills(): Observable<Skill[]>{
    
    return this.http.get<Skill[]>(this.apiUrl);
  }
}
