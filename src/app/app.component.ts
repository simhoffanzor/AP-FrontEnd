import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/Usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FrontEndVSC';

  usuarios: Usuario[] = [];

  constructor(
    private usuarioService: UsuarioService
  ) { }
  
  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe((usuarios)=>{
      this.usuarios = usuarios;
      console.log(usuarios);
    })
  }
}
