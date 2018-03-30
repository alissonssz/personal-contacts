import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  amountSocialMedia = [1];
  constructor() { }

  ngOnInit() {
  }

  onAddNewSocialMedia() {
    if (this.amountSocialMedia.length < 3) {
      this.amountSocialMedia.push(1);
    }
  }

  onRemoveSocialMedia() {
    if (this.amountSocialMedia.length >= 1) {
      this.amountSocialMedia.pop();
    }
  }
}
