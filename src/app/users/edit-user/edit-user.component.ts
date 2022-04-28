import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {User} from "../../@core/interfaces/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.sass']
})
export class EditUserComponent implements OnInit, OnChanges {
  @Input() singleUser: User | undefined;
  @Output() onSendUser: EventEmitter<User> = new EventEmitter<User>();
  userForm: FormGroup | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'singleUser': {
            if (this.singleUser)  this.formInit(this.singleUser);
          }
        }
      }
    }
  }

  formInit(user: User) {
    this.userForm = new FormGroup({
      email: new FormControl(user.email),
      name: new FormControl(user.name),
      phone: new FormControl(user.phone),
      username: new FormControl(user.username),
      website: new FormControl(user.website),
      address: new FormGroup({
        street: new FormControl(user.address.street),
        city: new FormControl(user.address.city),
        suite: new FormControl(user.address.suite),
        zip: new FormControl(user.address.zipcode),
      }),
      company: new FormGroup({
        bs: new FormControl(user.company.bs),
        catchPhrase: new FormControl(user.company.catchPhrase),
        name:new FormControl(user.company.name),
      })
    })
  }
  formSubmit(value: User) {
    const user: User =JSON.parse( JSON.stringify(this.singleUser));
    user.company = {...user.company, ...value.company};
    user.address = {...user.address, ...value.address};

    this.onSendUser.emit(user);
  }
}
