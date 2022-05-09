import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Skill } from '../../interfaces/Skill';
import { UiService } from 'src/app/servicios/ui.service';

@Component({
  selector: 'app-skills-item',
  templateUrl: './skills-item.component.html',
  styleUrls: ['./skills-item.component.css']
})
export class SkillsItemComponent implements OnInit {
  @Input() skill!: Skill;
  @Output() onDeleteSkill = new EventEmitter();
  logueado!:boolean;

  constructor(
    private uiService : UiService
  ) { }

  ngOnInit(): void {
    console.log("El estado es " +this.uiService.estadoBool());
    this.logueado = this.uiService.estadoBool();
  }

  onClick(){
    this.onDeleteSkill.emit();
  }

}
