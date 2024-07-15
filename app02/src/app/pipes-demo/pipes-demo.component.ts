import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IntoWordsPipe } from '../into-words.pipe';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [CommonModule,IntoWordsPipe],
  templateUrl: './pipes-demo.component.html',
  styleUrl: './pipes-demo.component.css'
})
export class PipesDemoComponent {

  str:string;
  num:number;
  dt:Date;

  constructor(){
    this.str="Hello! how are YOU!!";
    this.num=432.12312;
    this.dt=new Date();
  }
}
