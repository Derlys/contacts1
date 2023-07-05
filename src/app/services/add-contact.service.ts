import { Injectable } from '@angular/core';
import { Contact } from '../contact';

@Injectable({
  providedIn: 'root',
})
export class AddContactService {
  contacts: Contact[] = [
    {
      name: 'Derlys',
      phone: 301270288,
    },
  ];

  constructor() {}
}
