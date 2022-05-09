import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/interfaces/Usuario';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  @Input() usuario!: Usuario;

  user:string="";
  password:string="";
  text:string="Login";
  subscription?: Subscription;

  constructor(
    public modal:NgbModal
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
      console.log("EXITO");
    }
  }

}
