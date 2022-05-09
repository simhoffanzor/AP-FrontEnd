import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Trabajo } from '../../interfaces/Trabajo';
import { UiService } from 'src/app/servicios/ui.service';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent implements OnInit {
  @Input() trabajo!: Trabajo;
  @Output() onDeleteTrabajo=new EventEmitter();
  logueado!: boolean;
  
  constructor(
    private uiService : UiService) { }

  ngOnInit(): void {
    console.log("El estado es " +this.uiService.estadoBool());
    this.logueado = this.uiService.estadoBool();
  }

  onClick(){
    this.onDeleteTrabajo.emit();
  }

}
