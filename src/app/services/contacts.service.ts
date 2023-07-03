import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private urlApi = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}
}
