import { Component } from '@angular/core';
import { element } from 'protractor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showForm: boolean = false;
  title: string = 'MyProject';
  newFirstName: string = '';
  newLastName: string = '';
  newEmail: string = '';

  constructor() {

  }

  arrName: any[] = [
    { id: 1, firstname: 'Ta', lastname: 'Huy', email: 'huy@example.com' },
    { id: 2, firstname: 'Ta', lastname: 'Nick', email: 'nick@example.com' },
    { id: 3, firstname: 'Huynh', lastname: 'Annie', email: 'annie@example.com' },
    { id: 4, firstname: 'Reyes', lastname: 'Lynn', email: 'lynn@example.com' }
  ];

  submitUserName(createForm) {
    createForm.value.email = "@example.com";
    this.arrName.push(createForm.value);
    this.newFirstName = '';
    this.newLastName = '';
    this.newEmail = '';
  }

  // addUserName() {
  //   this.arrName.push({
  //     id: this.arrName.length + 1,
  //     firstname: this.newFirstName,
  //     lastname: this.newLastName,
  //     email: this.newEmail + "@example.com"
  //   });
  //   this.newFirstName = '';
  //   this.newLastName = '';
  //   this.newEmail = '';
  // }

  removeUserName(id: number) {
    const index = this.arrName.findIndex(element => element.id === id);
    this.arrName.splice(index, 1);
  }



}
