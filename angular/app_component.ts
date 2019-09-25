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

   listData: BookItem[] = [
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
      number: 32,
      date: 1998 - 12 - 0o5,
      id: 1
    },
    {
      id: 2,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      number: 34,
      date: 1885 - 0o1 - 12
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      number: 12,
      date: 2019 - 0o2 - 0o2,
      id: 3
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      number: 51,
      date: 2006 - 0o1 - 0o3,
      id: 4
    },
    {
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      number: 18,
      date: 2005 - 0o3 - 0o3,
      id: 5
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      number: 15,
      date: 1859 - 0o3 - 0o1,
      id: 6
    },
    {
      title: "To Kill a Mockingbir",
      author: "Alexander",
      number: 132,
      date: 2018 - 12 - 31,
      id: 16
    },
    {
      id: 21,
      title: "To Kill a Mockingbir",
      author: "Alexander",
      number: 13,
      date: 2018 - 12 - 31
    }
  ]

  // getListBook() {
  //   return of(this.listData);
  // }

  // addBook(value: BookItem): Observable<Object> {
  //   return of(this.listData.push(value));
  // }

  // removeBook(id: number): Observable<Object> {
  //   let index = this.listData.findIndex(ele => ele.id === id);
  //   let result = this.listData.splice(index);
  //   return of (result);
    
  // }

  // getBook(id: number): Observable<BookItem> {
  //   let data: BookItem = null;
  //   for (let ele of this.listData) {
  //     if (ele.id === id) {
  //       data = ele;
  //       break;
  //     }
  //   }
  //   return of(data);
  // }

  // updateBook(id: number, value: BookItem): Observable<Object> {
  //   let res: BookItem = null;
    
  //   return of(res);
  // }



}
