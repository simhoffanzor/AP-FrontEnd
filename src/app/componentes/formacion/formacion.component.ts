import { Component, OnInit } from '@angular/core';
import { FormacionService } from 'src/app/servicios/formacion.service';
import { Formacion } from '../../interfaces/Formacion';
import { UiService } from 'src/app/servicios/ui.service';
@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {

  formaciones: Formacion[] = [];
  logueado!: boolean;

  constructor(
    private formacionService: FormacionService,
    private uiService : UiService
  ) { }

  ngOnInit(): void {
    this.formacionService.getEstudios().subscribe((formaciones)=>{
      this.formaciones = formaciones;
      console.log(formaciones);
    }
    )
    console.log("El estado es " +this.uiService.estadoBool());
    this.logueado = this.uiService.estadoBool();
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
