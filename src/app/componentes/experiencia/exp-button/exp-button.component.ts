import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exp-button',
  templateUrl: './exp-button.component.html',
  styleUrls: ['./exp-button.component.css']
})
export class ExpButtonComponent implements OnInit {
  @Input() texto:string="";
  @Output() btnClick = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
  }

}
