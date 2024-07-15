import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private contacts: Contact[];
  private lastId:number;

  constructor() {

    this.contacts = [
      {id:1,fullName:"Vamsy Kiran",mobileNumber:"9052224753",mailId:"vamsy@gmail.com",dob:"1986-06-11"},
      {id:2,fullName:"KGN Murthy",mobileNumber:"9052224752",mailId:"kgn@gmail.com",dob:"1986-06-12"},
      {id:3,fullName:"Suresh Pedireddy",mobileNumber:"9052224751",mailId:"suresh@gmail.com",dob:"1986-06-13"},
      {id:4,fullName:"Ramesh Pekala",mobileNumber:"9052224750",mailId:"ramesh@gmail.com",dob:"1986-06-14"},
      {id:5,fullName:"M. Krishna",mobileNumber:"9052224758",mailId:"kirsh@gmail.com",dob:"1986-06-10"},
      {id:6,fullName:"Yudhister",mobileNumber:"9052224755",mailId:"yudhi@gmail.com",dob:"1986-06-15"}
    ];

    this.lastId=6;
  }

  add(contact:Contact):Contact {
    contact.id=++this.lastId;
    this.contacts.push(contact);
    return contact;
  }

  update(contact:Contact):Contact {
    let index = this.contacts.findIndex(c => c.id===contact.id);

    if(index>-1){
      this.contacts[index]=contact;
    }

    return contact;
  }

  getAll():Contact[]{
    return [...this.contacts];
  }

  getById(id:number):Contact|undefined{
    return this.contacts.find(c => c.id===id);
  }

  deleteById(id:number):void{
    let index = this.contacts.findIndex(c => c.id===id);

    if(index>-1){
      this.contacts.splice(index,1);
    }
  }
}
