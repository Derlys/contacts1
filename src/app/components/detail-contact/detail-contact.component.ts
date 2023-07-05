import { Component } from '@angular/core';
import { Contact } from '../../contact';
import { AddContactService } from '../../services/add-contact.service';

@Component({
  selector: 'app-detail-contact',
  templateUrl: './detail-contact.component.html',
  styleUrls: ['./detail-contact.component.css'],
})
export class DetailContactComponent {
  contacts: Contact[] = [];

  constructor(private readonly addContactService: AddContactService) {
    this.contacts = this.addContactService.contacts;
  }

  protected readonly name = name;
}
