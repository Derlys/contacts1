import { Component } from '@angular/core';
import { Contact } from '../../contact';
import { Router } from '@angular/router';

import { AddContactService } from '../../services/add-contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent {
  constructor(
    private readonly addContactService: AddContactService,
    private readonly router: Router
  ) {}

  contact: Contact = { name: '', phone: 2 };

  AddContact() {
    this.addContactService.contacts.push(this.contact);
    this.router.navigate(['/']);
  }
}
