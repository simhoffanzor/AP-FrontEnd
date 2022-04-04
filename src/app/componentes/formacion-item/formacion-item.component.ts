import { Component, OnInit, Input } from '@angular/core';
import { Formacion } from '../../Formacion';

@Component({
  selector: 'app-formacion-item',
  templateUrl: './formacion-item.component.html',
  styleUrls: ['./formacion-item.component.css']
})
export class FormacionItemComponent implements OnInit {
  @Input() estudio!: Formacion;

  constructor() { }

  ngOnInit(): void {
  }

}
