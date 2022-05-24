import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Formacion } from '../../../interfaces/Formacion';
import { FormacionService } from 'src/app/servicios/formacion.service';

@Component({
  selector: 'app-modal-editar-for',
  templateUrl: './modal-editar-for.component.html',
  styleUrls: ['./modal-editar-for.component.css']
})
export class ModalEditarForComponent implements OnInit {

  @Input() formacion!: Formacion;
  formaciones: Formacion[] = [];
  
  titulo:string ="";
  institucion:string="";
  periodo:string="";
  fotoEstudio:string="";
  certificado:string="";
  subscription?: Subscription;

  constructor(
    public modal:NgbModal,
    private formacionService: FormacionService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    /*Creo el objeto editado y lo paso por consola*/ 
    const id = this.formacion.id;
    const titulo = this.titulo;
    const institucion = this.institucion;
    const periodo = this.periodo;
    const fotoEstudio = this.fotoEstudio;
    const certificado = this.certificado;
    const forEdited = { id, titulo, institucion, periodo, fotoEstudio, certificado };

    /*Llamo al formacionService y le pido que ejecute la función de editFor*/
    this.formacionService.editFor(forEdited).subscribe((response)=>(
      console.log(response)
    ));
    
    formDetailUser.reset();
  }

}
