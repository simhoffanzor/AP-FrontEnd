import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Proyecto } from '../../../interfaces/Proyecto';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-agregar-proy',
  templateUrl: './modal-agregar-proy.component.html',
  styleUrls: ['./modal-agregar-proy.component.css']
})
export class ModalAgregarProyComponent implements OnInit {

  @Output() onAddProy: EventEmitter<Proyecto> = new EventEmitter();

  nombre:string ="";
  fecha:string="";
  descripcion:string="";
  fotoProyecto:string="";
  url:string="";
  subscription?: Subscription;

  constructor(
    public modal:NgbModal
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm) {
    const {nombre, fecha, descripcion, fotoProyecto, url} = this
    const newProy = {nombre, fecha, descripcion, fotoProyecto, url}
    this.onAddProy.emit(newProy);
    console.log(newProy);
    formDetailUser.reset();
  }
}
