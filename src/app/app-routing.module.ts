import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailContactComponent } from './components/detail-contact/detail-contact.component';
import { ListContactsComponent } from './components/list-contacts/list-contacts.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/list-contacts', pathMatch: 'full' },

  { path: 'list-contacts', component: ListContactsComponent },
  { path: 'detail-contact', component: DetailContactComponent },
  { path: 'add-contact', component: AddContactComponent },
  { path: 'edit-contact', component: EditContactComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
