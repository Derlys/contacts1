import { Component } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css'],
})
export class ListContactsComponent {
  contacts: Contact[] = [];

  constructor(private readonly contactsService: ContactsService) {}

  ngOnInit() {}

  contact: Contact;

  getContacts() {
    this.contactsService.getContacts().subscribe((contacts) => {
      this.contacts = contacts;
      this.getContacts();
    });
  }
}
