import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../services/contacts.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contacts-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.css'
})
export class ContactsListComponent {

  contacts:Contact[];

  constructor(private contactsService:ContactsService){
    this.contacts=this.contactsService.getAll();
  }

  remove(id:number){
    if(window.confirm("Are you SURE to delete?")){
      this.contactsService.deleteById(id);
      this.contacts=this.contactsService.getAll();
    }
  }
}
