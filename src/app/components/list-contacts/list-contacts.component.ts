import { Component } from '@angular/core';
import { Contact } from '../../contact';

import { AddContactService } from '../../services/add-contact.service';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css'],
})
export class ListContactsComponent {
  contacts: Contact[] = [];

  constructor(private readonly addContactService: AddContactService) {
    this.contacts = this.addContactService.contacts;
  }
}
