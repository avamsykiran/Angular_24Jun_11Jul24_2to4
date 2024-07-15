import { Component } from '@angular/core';
import { EmiCalcComponent } from './emi-calc/emi-calc.component';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { PrimeCheckerComponent } from './prime-checker/prime-checker.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[EmiCalcComponent,FriendsListComponent,PrimeCheckerComponent,PipesDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string;

  constructor(){
    this.title="Angular Standalone SPA";
  }
}
