import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/Usuario';

@Component({
  selector: 'app-sobre-mi-items',
  templateUrl: './sobre-mi-items.component.html',
  styleUrls: ['./sobre-mi-items.component.css']
})
export class SobreMiItemsComponent implements OnInit {

  @Input() usuario!: Usuario;

  constructor() { }

  ngOnInit(): void {
  }
}
