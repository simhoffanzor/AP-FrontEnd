import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { Proyecto } from '../../interfaces/Proyecto';

@Component({
  selector: 'app-proyectos-item',
  templateUrl: './proyectos-item.component.html',
  styleUrls: ['./proyectos-item.component.css']
})
export class ProyectosItemComponent implements OnInit {

  @Input() proyecto!: Proyecto;
  @Output() onDeleteProyecto = new EventEmitter();

  constructor(
    private proyectoService: ProyectoService
  ) { }

  ngOnInit(): void {
  }

  onClick(){
    this.onDeleteProyecto.emit();
  }
}
