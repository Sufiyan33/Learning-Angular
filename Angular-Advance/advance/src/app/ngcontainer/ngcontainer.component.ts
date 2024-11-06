import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ngcontainer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngcontainer.component.html',
  styleUrl: './ngcontainer.component.scss'
})
export class NgcontainerComponent {
  // ng-conainer or text inside it will be display if isContainer will be true
  isContainer: boolean = true;
  userDataFromPost: any[] =[];

  //http = Inject(HttpClient);
  constructor(private http: HttpClient){}
  getUser(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      this.userDataFromPost = res;
    })
  }
}
