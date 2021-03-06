import { Component, OnInit } from '@angular/core';
import { Skill } from '../../interfaces/Skill'
import { SkillService } from 'src/app/servicios/skill.service';
import { UiService } from 'src/app/servicios/ui.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {

  skills : Skill[] = [];
  logueado!:boolean;

  constructor(
    private skillService : SkillService,
    private uiService : UiService
  ) { }

  ngOnInit(): void {
    this.skillService.getSkills().subscribe((skills)=>{
      this.skills = skills;
      console.log(skills);
    })
    console.log("El estado es " +this.uiService.estadoBool());
    this.logueado = this.uiService.estadoBool();
  }

  deleteSkill(skill:Skill){
    this.skillService.deleteSkill(skill)
    .subscribe(
      ()=>(
        this.skills = this.skills.filter( t => t.id !== skill.id)
      )
    );
  }

  addSkill(skill: Skill){
    this.skillService.addSkill(skill).subscribe((skill)=>(
      this.skills.push(skill)
    ));
  }

}
