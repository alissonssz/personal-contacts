import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserModule } from '@angular/platform-browser';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ListContactComponent } from './contacts/list-contact/list-contact.component';
import { ContactComponent } from './contacts/list-contact/contact/contact.component';
import { EditContactComponent } from './contacts/edit-contact/edit-contact.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { ListContactService } from './contacts/list-contact/list-contact.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ListContactComponent,
    ContactComponent,
    EditContactComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
    RegisterComponent,
    AddContactComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  providers: [ListContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
