import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constant } from '../constant/Constant';

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

  getApiData: any[] =[];
  getAllUserDataFromGetApi(){
    debugger;
    this.http.get(Constant.GET_API_URL).subscribe((result:any) =>{
      debugger;
      this.getApiData = result;
    }, error=>{
      window.alert('Wrong api entered')
    })
  }
}
