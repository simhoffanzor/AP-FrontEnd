import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-proy-button',
  templateUrl: './proy-button.component.html',
  styleUrls: ['./proy-button.component.css']
})
export class ProyButtonComponent implements OnInit {
  @Input() texto: string ="";
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
  }

}
