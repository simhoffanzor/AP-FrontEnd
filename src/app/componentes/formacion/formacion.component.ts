import { Component, OnInit } from '@angular/core';
import { FormacionService } from 'src/app/servicios/formacion.service';
import { Formacion } from '../../Formacion';
@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {

  estudios: Formacion[] = [];
  constructor(
    private formacionService: FormacionService
  ) { }

  ngOnInit(): void {
    this.formacionService.getEstudios().subscribe((estudios)=>(
      this.estudios = estudios
    ))
  }

}
