import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {EditUserComponent} from "./edit-user/edit-user.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    UsersComponent,
    EditUserComponent
  ],
  exports: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class UsersModule { }
