import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Trabajo } from '../../../interfaces/Trabajo';
import { TrabajoService } from 'src/app/servicios/trabajo.service';

@Component({
  selector: 'app-modal-editar-exp',
  templateUrl: './modal-editar-exp.component.html',
  styleUrls: ['./modal-editar-exp.component.css']
})
export class ModalEditarExpComponent implements OnInit {
  
  @Input() trabajo!: Trabajo;
  trabajos: Trabajo[] = [];
  
  puesto:string ="";
  lugar:string="";
  fechaInicio:string="";
  fechaFinal:string="";
  descripcion:string="";
  fotoLugar:string="";
  subscription?: Subscription;

  constructor(
      public modal:NgbModal,
      private trabajoService: TrabajoService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    /*Creo el objeto editado y lo paso por consola*/ 
    const id = this.trabajo.id;
    const puesto = this.puesto;
    const lugar = this.lugar;
    const fechaInicio = this.fechaInicio;
    const fechaFinal = this.fechaFinal;
    const descripcion = this.descripcion;
    const fotoLugar = this.fotoLugar;
    const expEdited = { id, puesto, lugar, fechaInicio, fechaFinal, descripcion, fotoLugar};

    /*Llamo al trabajoService y le pido que ejecute la función de editExp*/
    this.trabajoService.editExp(expEdited).subscribe((response)=>(
      console.log(response)
    ));
    
    formDetailUser.reset();
  }

}
