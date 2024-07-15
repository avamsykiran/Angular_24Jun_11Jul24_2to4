import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emi-calc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './emi-calc.component.html',
  styleUrl: './emi-calc.component.css'
})
export class EmiCalcComponent {

  amount:number;
  roi:number;
  terms:number;
  emi:number;
  disbursmentDate:string;
  emiStartDate:string;
  emiEndDate:string;

  constructor(){
    this.amount=0;
    this.roi=0;
    this.terms=0;
    this.emi=0;
    this.disbursmentDate=new Date().toISOString().substring(0,10);
    this.emiStartDate="";
    this.emiEndDate="";
  }

  compute(){
    // P * r * (1 + r)^n / ((1 + r)^n - 1)
    let r = this.roi/1200;
    this.emi = this.amount * r * Math.pow(1+r,this.terms)/(Math.pow(1+r,this.terms)-1);
    let sDate = new Date(this.disbursmentDate);
    sDate.setMonth(sDate.getMonth()+1);
    let eDate = new Date(this.disbursmentDate);
    eDate.setMonth(eDate.getMonth()+this.terms);
    this.emiStartDate = sDate.toISOString().substring(0,10);
    this.emiEndDate = eDate.toISOString().substring(0,10);
  }
}
