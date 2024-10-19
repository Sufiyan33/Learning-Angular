import { Component } from '@angular/core';

export interface Item{
  id: number;
  name: String;
}
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {

  items: Item[] =[
    {id: 1, name:"user1"},
    {id: 2, name: "user2"},
    {id: 3, name: "user3"},
  ];
  
  selectedItem:any;
  selectItem(item:any){
    this.selectedItem= item;
    alert('item id: ${item.id}, item name: ${item.name}');
  }
}
