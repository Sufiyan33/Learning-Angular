import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
  url = "https://jsonplaceholder.typicode.com/posts";

  userDataFromPost: any[]=[];
  flag = false;

  ngOnInit(): void {
    this.getAllDataFromPost();
  }
  onSave(){
    this.http.post(this.url, this.userObj).subscribe((result:any) =>{
      this.getAllDataFromPost();
      console.warn(result)
    })
  }

  getAllDataFromPost(){
    this.http.get(this.url).subscribe((res:any) =>{
      this.userDataFromPost = res;
    })
  }

  // Method for editing items value.
  OnEdit(data: any){
    this.userObj = data;
  }

  // Adding method for update Put api
  OnUpdate(){
    this.http.put("https://jsonplaceholder.typicode.com/posts/2", this.userObj).subscribe((res)=>{
      this.getAllDataFromPost();
      console.warn(res)
    })
  }

  // Adding method for deleting data, delete api
  OnDelete(id: number){
    this.http.delete("https://jsonplaceholder.typicode.com/posts/2").subscribe((res)=>{
      this.getAllDataFromPost();
      console.warn(res)
    })
  }
}
