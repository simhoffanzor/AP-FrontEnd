import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Trabajo } from 'src/app/Trabajo';

@Component({
  selector: 'app-modal-agregar-exp',
  templateUrl: './modal-agregar-exp.component.html',
  styleUrls: ['./modal-agregar-exp.component.css']
})
export class ModalAgregarExpComponent implements OnInit {

  @Output() onAddExp: EventEmitter<Trabajo> = new EventEmitter();

  puesto:string ="";
  lugar:string="";
  fechaInicio:string="";
  fechaFinal:string="";
  descripcion:string="";
  fotoLugar:string="";
  subscription?: Subscription;

  constructor(
    public modal:NgbModal
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    const {puesto, lugar, fechaInicio, fechaFinal, descripcion, fotoLugar} = this
    const newExp = {puesto,lugar,fechaInicio, fechaFinal, descripcion, fotoLugar}
    this.onAddExp.emit(newExp);
    formDetailUser.reset();
  }


}