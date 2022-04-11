import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Formacion } from 'src/app/Formacion';

@Component({
  selector: 'app-modal-agregar-for',
  templateUrl: './modal-agregar-for.component.html',
  styleUrls: ['./modal-agregar-for.component.css']
})
export class ModalAgregarForComponent implements OnInit {

  @Output() onAddForm: EventEmitter<Formacion> = new EventEmitter();

  titulo:string ="";
  institucion:string="";
  periodo:string="";
  fotoEstudio:string="";
  certificado:string="";
  subscription?: Subscription;

  constructor(
    public modal:NgbModal
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    const {titulo, institucion, periodo, fotoEstudio, certificado} = this
    const newForm = {titulo, institucion, periodo, fotoEstudio, certificado}
    this.onAddForm.emit(newForm);
    formDetailUser.reset();
  }
}
