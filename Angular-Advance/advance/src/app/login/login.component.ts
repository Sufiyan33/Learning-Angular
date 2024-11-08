import { HttpClient } from '@angular/common/http';
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

 /* userObj:any = {
    userName: '',
    password: ''
  }*/
  userObj: any={
    EmailId: '',
    Pasword: ''
  }

  constructor(private router:Router, private http: HttpClient){}
  // commenting this code and adding new code to make api call.
 /* onLogin(){
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
  }*/

    // Adding code for api call login.
  onLogin(){
    this.http.post("https://projectapi.gerasim.in/api/UserApp/login", this.userObj).subscribe((res:any)=>{
      if(res.result){
      alert('Login success')
      localStorage.setItem('loginUser', JSON.stringify(res.data));
      this.router.navigateByUrl('user-list');
      }else{
        alert(res.message)
      }
    })
  }
}
