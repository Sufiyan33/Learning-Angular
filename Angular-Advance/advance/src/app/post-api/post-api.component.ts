import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Constant } from '../constant/Constant';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.scss'
})
export class PostApiComponent implements OnInit{
  userObj: any = {
    "userId": 2,
    "id": 0,
    "title": "",
    "body": ""
  }

  constructor(private http: HttpClient){}

  userDataFromPost: any[]=[];
  flag = false;

  ngOnInit(): void {
    this.getAllDataFromPost();
  }
  onSave(){
    this.http.post(Constant.POST_API_URL, this.userObj).subscribe((result:any) =>{
      this.getAllDataFromPost();
      console.warn(result)
    })
  }

  getAllDataFromPost(){
    this.http.get(Constant.GET_API_URL).subscribe((res:any) =>{
      this.userDataFromPost = res;
    })
  }

  // Method for editing items value.
  OnEdit(data: any){
    this.userObj = data;
  }

  // Adding method for update Put api
  OnUpdate(){
    this.http.put(Constant.PUT_API_URL, this.userObj).subscribe((res)=>{
      this.getAllDataFromPost();
      console.warn(res)
    })
  }

  // Adding method for deleting data, delete api
  OnDelete(id: number){
    this.http.delete(Constant.DELETE_API_URL).subscribe((res)=>{
      this.getAllDataFromPost();
      console.warn(res)
    })
  }
}
