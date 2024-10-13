import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from "./user-list/user-list.component";
import { MyCompComponent } from "./my-comp/my-comp.component";
import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent, MyCompComponent, EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sufiyan';
  data= "Hi, I am Learning Angular";
  getValue(){
    return "What about you"
  }
}
