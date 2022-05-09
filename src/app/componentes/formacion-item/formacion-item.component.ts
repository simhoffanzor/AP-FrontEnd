import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Formacion } from '../../interfaces/Formacion';
import { UiService } from 'src/app/servicios/ui.service';
@Component({
  selector: 'app-formacion-item',
  templateUrl: './formacion-item.component.html',
  styleUrls: ['./formacion-item.component.css']
})
export class FormacionItemComponent implements OnInit {
  @Input() formacion!: Formacion;
  @Output() onDeleteFormacion = new EventEmitter();
  logueado!: boolean;

  constructor(
    private uiService : UiService
  ) { }

  ngOnInit(): void {
    console.log("El estado es " +this.uiService.estadoBool());
    this.logueado = this.uiService.estadoBool();
  }

  onClick(){
    this.onDeleteFormacion.emit();
  }
}
