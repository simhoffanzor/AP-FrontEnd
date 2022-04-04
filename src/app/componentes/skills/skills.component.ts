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

}
