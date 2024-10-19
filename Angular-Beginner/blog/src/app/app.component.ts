import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from "./user-list/user-list.component";
import { MyCompComponent } from "./my-comp/my-comp.component";
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from "./student/student.component";
import { UserAuthModule } from './user-auth/user-auth.module';
import { LoginComponent } from "./user-auth/login/login.component";
import { HeaderComponent } from './header/header.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemInputOutputComponent } from './item-input-output/item-input-output.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent, MyCompComponent, EmployeeComponent, 
    StudentComponent, UserAuthModule, LoginComponent, HeaderComponent, ItemDetailsComponent, 
    ItemInputOutputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sufiyan';
  data= "Hi, I am Learning Angular";
  getValue(){
    return "What about you"
  }

  /*
  Since I'm writting function inside a class, hence don't need to add function keyword.
  */
  getName(Intro:string,name:string){
    alert("My Name is ")
    alert("Sufiyan Ahmad")
  }
  //OR you can also pass any, if you don't want to declare data types.
  getNameWithAny(name:any){
    alert("Any example!!!")
  }

  getData(value:string){
    console.warn("testing events!!!")
  }

  // Getting text box value and printing it.
  displayVal='';
  getBoxValue(data:string){
    console.warn(data);
    this.displayVal=data;
  }

  // Writting function to increase/decrease counter
  count=0;
  counter(type:string){
    type==='add' ? this.count++ : this.count--;
  }

  // Binding property
  name="peter";
  //disable = true;
  //Now let's make this disable property false and analyze
  disable = false;

  // Now defining if-else conditions.
  show = false;
  color = "green"

  // For Loop.
  users =['Anil', 'Ajay', 'Sabir', 'Sufiyan'];

  // Creating object array and exe over loop
  userDetails=[{
    name: 'Anil', email: 'abc@gmail.com', phoneNo:1234},
    {name: 'Ajay', email: 'abcd@gmail.com', phoneNo:12345},
    {name: 'Sabir', email: 'abcde@gmail.com', phoneNo:123456},
    {name: 'Sufiyan', email: 'abcdef@gmail.com', phoneNo:1234567},
  ];

  // Style Binding example
  colorFlag = "red";
  bgColorFlag = "black";
  updateColor(){
    this.colorFlag = "Blue";
    this.bgColorFlag = "gray";
  }
}
