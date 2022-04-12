import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Trabajo } from '../../interfaces/Trabajo';
@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent implements OnInit {
  @Input() trabajo!: Trabajo;
  @Output() onDeleteTrabajo=new EventEmitter();

  constructor(
  ) { }

  ngOnInit(): void {
  }

  onClick(){
    this.onDeleteTrabajo.emit();
  }

}
