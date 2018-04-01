import { Component, OnInit } from '@angular/core';
import { ListContactService } from './list-contact.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit {

  contacts = [];

  constructor(private contactService: ListContactService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.contacts =  this.contactService.getContacts();
    console.log('contacts: ' + this.contacts);
  }

  onEditContact(id: string) {
    console.log('clicked');
    this.router.navigate([id, 'edit-contact'], {relativeTo: this.route});
  }
}
