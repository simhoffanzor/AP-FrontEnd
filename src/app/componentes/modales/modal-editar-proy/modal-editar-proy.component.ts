import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Proyecto } from '../../../interfaces/Proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-modal-editar-proy',
  templateUrl: './modal-editar-proy.component.html',
  styleUrls: ['./modal-editar-proy.component.css']
})
export class ModalEditarProyComponent implements OnInit {

  @Input() proyecto!: Proyecto;
  proyectos: Proyecto[] = [];
  
  nombre:string ="";
  fecha:string="";
  descripcion:string="";
  fotoProyecto:string="";
  url:string="";
  subscription?: Subscription;

  constructor(
      public modal:NgbModal,
      private proyectoService: ProyectoService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    /*Creo el objeto editado y lo paso por consola*/ 
    const id = this.proyecto.id;
    const nombre = this.nombre;
    const fecha = this.fecha;
    const descripcion = this.descripcion;
    const fotoProyecto = this.fotoProyecto;
    const url = this.url;
    const proyEdited = { id, nombre, fecha, descripcion, fotoProyecto, url};

    /*Llamo al proyectoService y le pido que ejecute la función de editProy*/
    this.proyectoService.editProy(proyEdited).subscribe((response)=>(
      console.log(response)
    ));
    
    formDetailUser.reset();
  }

}
