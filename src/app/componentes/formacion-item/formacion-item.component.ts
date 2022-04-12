import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Formacion } from '../../interfaces/Formacion';

@Component({
  selector: 'app-formacion-item',
  templateUrl: './formacion-item.component.html',
  styleUrls: ['./formacion-item.component.css']
})
export class FormacionItemComponent implements OnInit {
  @Input() formacion!: Formacion;
  @Output() onDeleteFormacion = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.onDeleteFormacion.emit();
  }
}
