import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  logos: string[];
  logoIndex: number;

  classController: { bordered: boolean, centered: boolean };
  logoWidth: number;

  constructor() {
    this.logoIndex = 0;

    this.logos = [
      "imgs/w1.jpeg",
      "imgs/w2.jpeg",
      "imgs/w3.jpeg",
      "imgs/w4.png"
    ];

    this.logoWidth = 400;

    this.classController = { bordered: true, centered: true };

  }

  toggle() {
    this.logoIndex++;
    if (this.logoIndex === this.logos.length) {
      this.logoIndex = 0;
    }
  }
}
