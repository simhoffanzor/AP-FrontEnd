import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { Proyecto } from '../../interfaces/Proyecto';
import { UiService } from 'src/app/servicios/ui.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos:Proyecto[] = [];
  logueado!:boolean;
 

  constructor(
    private proyectoService: ProyectoService,
    private uiService: UiService
  ) { }

  ngOnInit(): void {
    this.proyectoService.getProyectos().subscribe((proyectos)=>{
      this.proyectos = proyectos;
      console.log(proyectos);
    })
    console.log("El estado es " +this.uiService.estadoBool());
    this.logueado = this.uiService.estadoBool();
  }

  addProy(proyecto: Proyecto){
    this.proyectoService.addProy(proyecto).subscribe((proyecto)=>{
      this.proyectos.push(proyecto);
      console.log(proyecto);
    });
  }

  deleteProyecto(proyecto:Proyecto){
    this.proyectoService.deleteProyecto(proyecto)
    .subscribe(
      ()=>(
        this.proyectos = this.proyectos.filter( t => t.id !== proyecto.id)
      )
    );
  }
}
