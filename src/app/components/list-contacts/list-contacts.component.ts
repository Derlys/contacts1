import { Component } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { Contact } from '../../contact';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css'],
})
export class ListContactsComponent {
  contacts: Contact[] = [];

  constructor(private readonly contactsService: ContactsService) {}

  ngOnInit() {
    this.contactsService.getContacts().subscribe((data) => {
      this.contacts = data;
    });
  }
}
