import { Component, OnInit, Input } from '@angular/core';
import { Proyecto } from '../../Proyecto';

@Component({
  selector: 'app-proyectos-item',
  templateUrl: './proyectos-item.component.html',
  styleUrls: ['./proyectos-item.component.css']
})
export class ProyectosItemComponent implements OnInit {

  @Input() proyecto!: Proyecto;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    
  }
}
