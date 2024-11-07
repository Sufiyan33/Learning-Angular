import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  userObj:any = {
    userName: '',
    password: ''
  }

  constructor(private router:Router){}
  onLogin(){
    if(this.userObj.userName == "admin" && this.userObj.password == "123"){
      alert('Login successfully');
      // before redirecting to the page store credential into local storage
      localStorage.setItem('loginuser', this.userObj.userName)
      this.router.navigateByUrl('user-list');
    }else if(this.userObj.userName == "admin" && this.userObj.password == "12345"){
      alert('Login successfully');
      // before redirecting to the page store credential into local storage
      localStorage.setItem('loginuser', this.userObj.userName)
      this.router.navigateByUrl('user-list');
    }else{
      alert('Invalid credentials')
    }
  }
}
