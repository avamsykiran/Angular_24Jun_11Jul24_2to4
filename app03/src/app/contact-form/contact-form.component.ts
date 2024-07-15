import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactsService } from '../services/contacts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  contactform: FormGroup;
  isEditing:boolean;

  constructor(private formBuilder: FormBuilder,private contactService:ContactsService,
    private router:Router,private activatedRoute:ActivatedRoute) {
    this.contactform = this.formBuilder.group({
      id: [0],
      fullName: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
      mobileNumber: ["", [Validators.required, Validators.pattern('[1-9][0-9]{9}')]],
      mailId: ["", [Validators.required, Validators.email]],
      dob: ["", [Validators.required]]
    });

    this.isEditing=false;
  }

  ngOnInit(){
    let id = this.activatedRoute.snapshot.params["id"];

    if(id){
      let c = this.contactService.getById(Number(id));
      if(c){
        this.isEditing=true;
        this.contactform.reset(c);
      }
    }
  }

  get id(){
    return this.contactform.controls["id"];
  }

  get fullName(){
    return this.contactform.controls["fullName"];
  }

  get mobileNumber(){
    return this.contactform.controls["mobileNumber"];
  }

  get mailId(){
    return this.contactform.controls["mailId"];
  }

  get dob(){
    return this.contactform.controls["dob"];
  }

  formSubmitted(){
    let contact = this.contactform.value;

    if(this.isEditing){
      this.contactService.update(contact);
    }else{
      this.contactService.add(contact);
    }
    
    this.router.navigate(['/list']);
  }
}
