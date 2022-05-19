import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Skill } from '../interfaces/Skill';

const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class SkillService {

  //private apiUrl = 'http://localhost:8081'
  private apiUrl = 'https://ap-portfoliobackend.herokuapp.com'
  constructor(
    private http: HttpClient
  ) { }

  getSkills(): Observable<Skill[]>{
    
    return this.http.get<Skill[]>(`${this.apiUrl}/verSkills`);
  }

  deleteSkill(skill:Skill):Observable<Skill>{
    const url = `${this.apiUrl}/eliminarSkill/${skill.id}`
    return this.http.delete<Skill>(url)
  }

  addSkill(skill:Skill):Observable<Skill>{
    return this.http.post<Skill>(`${this.apiUrl}/newSkill`, skill, httpOptions)
  }

  editSkill(skill:Skill):Observable<Skill>{
    return this.http.put<Skill>(
      `${this.apiUrl}/editarSkill/${skill.id}`, skill, httpOptions)
  }

}
