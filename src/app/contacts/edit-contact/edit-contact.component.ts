import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ListContactService } from '../list-contact/list-contact.service';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  contact: Contact;

  constructor(private contactService: ListContactService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];

    this.route.params
    .subscribe(
      (params: Params) => {
        this.contact = this.contactService.getContact(+params['id']);
      }
    );
  }

}
