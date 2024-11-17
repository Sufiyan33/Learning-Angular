import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  onRoleChange$: Subject<String> = new Subject<String>;
  role$: BehaviorSubject<String> = new BehaviorSubject<String>("");

  constructor() { }
  usersAllData(){
    return [
      {name: 'Sufiyan', age: 26, email: 'abc@gmailc.com'},
      {name: 'Sabir', age: 27, email: 'abcd@gmail.com'},
      {name: 'Alfaz', age: 28, email: 'abcde@gmail.com'},
      {name: 'Abhisekt', age: 29, email: 'abcdef@gmail.com'},
    ]
  }
}
