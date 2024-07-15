import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prime-checker',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './prime-checker.component.html',
  styleUrl: './prime-checker.component.css'
})
export class PrimeCheckerComponent {

  n!:number;
  factors!:number[];

  checkFactors(){
    if(this.n){
      this.factors=[1];

      for(let i=2;i<this.n/2;i++){
        if(this.n%i===0){
          this.factors.push(i);
        }
      }

      this.factors.push(this.n);
    }
  }
}
