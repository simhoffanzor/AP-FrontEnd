import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from '../../Usuario';
@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe((usuarios)=>(
      this.usuarios = usuarios
    ))
  }


}
