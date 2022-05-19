import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Usuario } from '../../../interfaces/Usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-modal-editar-usu',
  templateUrl: './modal-editar-usu.component.html',
  styleUrls: ['./modal-editar-usu.component.css']
})
export class ModalEditarUsuComponent implements OnInit {
  @Input() usuario!: Usuario;
  usuarios: Usuario[] = [];
  
  nombre:string ="";
  apellido:string="";
  descripcion:string="";
  titulo:string="";
  foto:string="";
  github:string="";
  linkedin:string="";
  twitter:string="";
  telefono:string="";
  mail:string="";
  password:string="";
  subscription?: Subscription;

  constructor(
      public modal:NgbModal,
      private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    /*Creo el objeto editado y lo paso por consola*/ 
    const id = this.usuario.id;
    
    const nombre = this.nombre;
    const apellido = this.apellido;
    const descripcion = this.descripcion;
    const titulo = this.titulo;
    const foto = this.foto;
    const github = this.github;
    const linkedin = this.linkedin;
    const twitter = this.twitter;
    const telefono = this.telefono;
    const mail = this.mail;
    const password = this.password;

    if ((this.nombre.length || this.apellido.length || this.descripcion.length || this.titulo.length || this.foto.length || this.github.length || this.linkedin.length || this.twitter.length || this.telefono.length || this.mail.length || this.password.length) === 0 ){
      alert ("Por favor, complete todos los campos")
    }

    const usuEdited = { id, nombre, apellido, descripcion, titulo, foto, github, 
                        linkedin, twitter, telefono, mail, password };

    /*Llamo al usuarioService y le pido que ejecute la función de editUsu*/
    this.usuarioService.editUsu(usuEdited).subscribe((response)=>(
      console.log(response)
    ));
    console.log(usuEdited);
    formDetailUser.reset();
  }

}
