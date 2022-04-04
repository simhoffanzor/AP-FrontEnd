import { Component, OnInit, Input } from '@angular/core';
import { Trabajo } from '../../Trabajo';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent implements OnInit {
  @Input() trabajo!: Trabajo;

  constructor() { }

  ngOnInit(): void {
  }

}
