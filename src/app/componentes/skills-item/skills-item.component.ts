import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Skill } from '../../interfaces/Skill';

@Component({
  selector: 'app-skills-item',
  templateUrl: './skills-item.component.html',
  styleUrls: ['./skills-item.component.css']
})
export class SkillsItemComponent implements OnInit {
  @Input() skill!: Skill;
  @Output() onDeleteSkill = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.onDeleteSkill.emit();
  }

}
