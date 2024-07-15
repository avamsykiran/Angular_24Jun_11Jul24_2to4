import { Routes } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

export const routes: Routes = [
    {path:'',pathMatch:'full',redirectTo:"/list"},
    {path:"list",component:ContactsListComponent},
    {path:'add',component:ContactFormComponent},
    {path:'edit/:id',component:ContactFormComponent}
];
