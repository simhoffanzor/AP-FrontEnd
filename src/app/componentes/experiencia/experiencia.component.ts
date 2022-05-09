import { Component, OnInit } from '@angular/core';
import { TrabajoService } from 'src/app/servicios/trabajo.service';
import { Trabajo } from '../../interfaces/Trabajo';
import { UiService } from 'src/app/servicios/ui.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  trabajos: Trabajo[] = [];
  logueado!: boolean;

  constructor(
    private trabajoService: TrabajoService,
    private uiService : UiService
  ) { 
  }

  ngOnInit(): void {
    this.trabajoService.getTrabajos().subscribe((trabajos)=>{
      this.trabajos = trabajos;
      console.log(trabajos);
    });
    console.log("El estado es " +this.uiService.estadoBool());
    this.logueado = this.uiService.estadoBool();
  }
  
  deleteTrabajo(trabajo: Trabajo){
    this.trabajoService.deleteTrabajo(trabajo)
    .subscribe(
      ()=>(
        this.trabajos = this.trabajos.filter( t => t.id !== trabajo.id)
      )
    );
  }

  addExp(trabajo: Trabajo){
    this.trabajoService.addExp(trabajo).subscribe((trabajo)=>(
      this.trabajos.push(trabajo)
    ));
  }
  
}