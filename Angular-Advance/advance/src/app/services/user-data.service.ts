import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  users(){
    return [
      {name: 'Sufiyan', age: 26, email: 'abc@gmailc.com'},
      {name: 'Sabir', age: 27, email: 'abcd@gmail.com'},
      {name: 'Alfaz', age: 28, email: 'abcde@gmail.com'},
      {name: 'Abhisekt', age: 29, email: 'abcdef@gmail.com'},
    ]
  }
}
