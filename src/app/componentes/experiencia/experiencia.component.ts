import { Component, OnInit } from '@angular/core';
import { TrabajoService } from 'src/app/servicios/trabajo.service';
import { Trabajo } from '../../Trabajo';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  trabajos: Trabajo[] = [];

  constructor(
    private trabajoService: TrabajoService
  ) { 
    
  }

  ngOnInit(): void {
    this.trabajoService.getTrabajos().subscribe((trabajos)=>(
      this.trabajos = trabajos
    ))
  }

}
