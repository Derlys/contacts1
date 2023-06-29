import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router'

const routes: Routes =[
  { path:'', redirectTo:'/listcontacts', pathMatch: 'full'

  },
  { path:'detailcontact', component: 'DetailContactComponent'

  },
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
