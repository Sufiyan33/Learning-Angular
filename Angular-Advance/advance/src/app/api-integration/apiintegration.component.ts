import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apiintegration',
  standalone: true,
  imports: [],
  templateUrl: './apiintegration.component.html',
  styleUrl: './apiintegration.component.scss'
})
export class ApiintegrationComponent {

  /*
  Making an api call get, it will return some data, use subscribe to catch data.
  If you want then debugger, in method and in api call for debugging.
  */
  constructor(private http: HttpClient){}
  url = "https://jsonplaceholder.typicode.com/users";

  getApiData: any[] =[];
  getAllUserDataFromGetApi(){
    debugger;
    this.http.get(this.url).subscribe((result:any) =>{
      debugger;
      this.getApiData = result;
    }, error=>{
      window.alert('Wrong api entered')
    })
  }
}
