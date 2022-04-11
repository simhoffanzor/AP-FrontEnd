import { Component, OnInit } from '@angular/core';
import { FormacionService } from 'src/app/servicios/formacion.service';
import { Formacion } from '../../Formacion';
@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {

  formaciones: Formacion[] = [];

  constructor(
    private formacionService: FormacionService
  ) { }

  ngOnInit(): void {
    this.formacionService.getEstudios().subscribe((formaciones)=>(
      this.formaciones = formaciones
    ))
  }

  deleteFormacion(formacion: Formacion){
    this.formacionService.deleteFormacion(formacion)
    .subscribe(
      ()=>(
        this.formaciones = this.formaciones.filter( t => t.id !== formacion.id)
      )
    );
  }

  addForm(formacion: Formacion){
    this.formacionService.addForm(formacion).subscribe((formacion)=>(
      this.formaciones.push(formacion)
    ));
  }
}
