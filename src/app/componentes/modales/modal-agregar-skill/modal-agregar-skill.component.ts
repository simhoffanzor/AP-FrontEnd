import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Skill } from '../../../interfaces/Skill';
@Component({
  selector: 'app-modal-agregar-skill',
  templateUrl: './modal-agregar-skill.component.html',
  styleUrls: ['./modal-agregar-skill.component.css']
})
export class ModalAgregarSkillComponent implements OnInit {

  @Output() onAddSkill: EventEmitter<Skill> = new EventEmitter();

  nombre:string ="";
  nivel!:number;
  url:string="";
  subscription?: Subscription;

  constructor(
    public modal:NgbModal
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    const {nombre, nivel, url} = this
    const newSkill = {nombre, nivel, url}
    this.onAddSkill.emit(newSkill);
    formDetailUser.reset();
  }

}
