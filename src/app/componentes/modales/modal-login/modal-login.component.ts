import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/interfaces/Usuario';
import { UiService } from 'src/app/servicios/ui.service';
@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  @Input() usuario!: Usuario;

  user:string="";
  password:string="";
  text:string="Iniciar sesión";
  inicio: boolean = false;
  subscription?: Subscription;

  constructor(
    public modal:NgbModal,
    private uiService : UiService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    const {user, password} = this
    const loginUser = {user, password }
    console.log(loginUser);
    formDetailUser.reset();

    if (user === this.usuario.mail && 
      password === this.usuario.password){
      this.uiService.toggleEdit();
      this.inicio = this.uiService.estadoBool();
      console.log("Sera posible ESTO: "+this.uiService.estadoBool());
    }
    else {
      alert("Usuario o contraseña incorrectos.")
    }
  }

  cerrarSesion(){
    this.uiService.toggleEdit();
    this.inicio = this.uiService.estadoBool();
    console.log("Sera posible ESTO: "+this.uiService.estadoBool());
  }

}
