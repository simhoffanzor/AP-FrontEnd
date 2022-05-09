import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { Proyecto } from '../../interfaces/Proyecto';
import { UiService } from 'src/app/servicios/ui.service';
@Component({
  selector: 'app-proyectos-item',
  templateUrl: './proyectos-item.component.html',
  styleUrls: ['./proyectos-item.component.css']
})
export class ProyectosItemComponent implements OnInit {

  @Input() proyecto!: Proyecto;
  @Output() onDeleteProyecto = new EventEmitter();
  logueado!:boolean;

  constructor(
    private proyectoService: ProyectoService,
    private uiService: UiService
  ) { }

  ngOnInit(): void {
    console.log("El estado es " +this.uiService.estadoBool());
    this.logueado = this.uiService.estadoBool();
  }

  onClick(){
    this.onDeleteProyecto.emit();
  }
}
