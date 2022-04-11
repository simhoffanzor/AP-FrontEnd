import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { Proyecto } from '../../Proyecto';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos:Proyecto[] = [];
 

  constructor(
    private proyectoService: ProyectoService
  ) { }

  ngOnInit(): void {
    this.proyectoService.getProyectos().subscribe((proyectos)=>(
      this.proyectos = proyectos
    ))
  }

  deleteProyecto(proyecto: Proyecto){
    this.proyectoService.deleteProyecto(proyecto)
    .subscribe(
      ()=>(
        this.proyectos = this.proyectos.filter( t => t.id !== proyecto.id)
      )
    );
  }

  addProy(proyecto: Proyecto){
    this.proyectoService.addProy(proyecto).subscribe((proyecto)=>(
      this.proyectos.push(proyecto)
    ));
  }
}
