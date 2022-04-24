import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Skill } from '../../../interfaces/Skill';
import { SkillService } from 'src/app/servicios/skill.service';


@Component({
  selector: 'app-modal-editar-skill',
  templateUrl: './modal-editar-skill.component.html',
  styleUrls: ['./modal-editar-skill.component.css']
})
export class ModalEditarSkillComponent implements OnInit {

  @Input() skill!: Skill;
  skills: Skill[] = [];
  
  nombre:string ="";
  nivel:number=0;
  url:string="";
  subscription?: Subscription;

  constructor(
      public modal:NgbModal,
      private skillService: SkillService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    /*Creo el objeto editado y lo paso por consola*/ 
    const id = this.skill.id;
    const nombre = this.nombre;
    const nivel = this.nivel;
    const url = this.url;
    const skillEdited = { id, nombre, nivel, url};

    /*Llamo al skillService y le pido que ejecute la función de editSkill*/
    this.skillService.editSkill(skillEdited).subscribe((response)=>(
      console.log(response)
    ));
    
    formDetailUser.reset();
  }

}
