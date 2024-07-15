import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './friends-list.component.html',
  styleUrl: './friends-list.component.css'
})
export class FriendsListComponent {

  friends: string[];
  fnm: string;

  constructor() {
    this.friends = [];
    this.fnm = "";
  }

  add() {
    if (this.fnm.trim().length > 0) {
      this.friends.push(this.fnm);
      this.fnm = "";
    }
  }

  remove(index: number) {
    this.friends.splice(index, 1);
  }
}
