import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../interfaces/Usuario';
import { UiService } from 'src/app/servicios/ui.service';
@Component({
  selector: 'app-sobre-mi-items',
  templateUrl: './sobre-mi-items.component.html',
  styleUrls: ['./sobre-mi-items.component.css']
})
export class SobreMiItemsComponent implements OnInit {

  @Input() usuario!: Usuario;
  logueado!: boolean;

  constructor(
    private uiService : UiService
  ) { }

  ngOnInit(): void {
    console.log("El estado es " +this.uiService.estadoBool());
    this.logueado = this.uiService.estadoBool();
  }
}
