import { Component } from '@angular/core';

@Component({
  selector: 'app-arithmetic',
  templateUrl: './arithmetic.component.html',
  styleUrl: './arithmetic.component.css'
})
export class ArithmeticComponent {

  n1:number;
  n2:number;

  constructor(){
    this.n1=10;
    this.n2=3;
  }

}
