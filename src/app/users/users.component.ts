import { Component, OnInit } from '@angular/core';
import {ApiService} from "../@core/api.service";
import {User} from "../@core/interfaces/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  get selectedUser(): User | undefined {
    return this._selectedUser;
  }
  set selectedUser(value: User | undefined) {
    this._selectedUser = value;
  }
  private _selectedUser: User | undefined;

  userList: User[] = [];
  constructor(public api: ApiService) {
    this.api.getUsers().subscribe(users => {
      this.userList = users
    })
  }

  ngOnInit(): void {}

}
