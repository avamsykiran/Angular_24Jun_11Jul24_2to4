import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intoWords',
  standalone: true
})
export class IntoWordsPipe implements PipeTransform {

  digits:string[];

  constructor(){
    this.digits=[
      "ZERO","ONE","TWO","THREE","FOUR",
      "FIVE","SIX","SEVEN","EIGHT","NINE"
    ];
  }

  transform(value: number): String {
    let words="";
    let strValue = String(value);

    for(let i=0;i<strValue.length;i++){
      let ch = strValue.charAt(i);

      if("."===ch){
        words = words + " dot ";
      }else{
        let index = Number(ch);
        words = words + " " + this.digits[index];
      }
    }
    
    return words;
  }

}
