import { Component, OnInit } from '@angular/core';
import { Skill } from '../../Skill'
import { SkillService } from 'src/app/servicios/skill.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {

  skills : Skill[] = [];

  constructor(
    private skillService : SkillService
  ) { }

  ngOnInit(): void {
    this.skillService.getSkills().subscribe((skills)=>(
      this.skills = skills
    )
      
    )
  }

  toggleAgregarSkill(){
    alert("Estás agregando una skill");
  }

  deleteSkill(skill:Skill){
    this.skillService.deleteSkill(skill)
    .subscribe(
      ()=>(
        this.skills = this.skills.filter( t => t.id !== skill.id)
      )
    );
  }

}
