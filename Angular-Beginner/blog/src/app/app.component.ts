import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from "./user-list/user-list.component";
import { MyCompComponent } from "./my-comp/my-comp.component";
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from "./student/student.component";
import { UserAuthModule } from './user-auth/user-auth.module';
import { LoginComponent } from "./user-auth/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent, MyCompComponent, EmployeeComponent, StudentComponent, UserAuthModule, LoginComponent],
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
}
