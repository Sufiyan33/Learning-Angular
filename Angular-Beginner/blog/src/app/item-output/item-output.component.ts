import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-item-output',
  standalone: true,
  imports: [],
  templateUrl: './item-output.component.html',
  styleUrl: './item-output.component.css'
})
export class ItemOutputComponent {

  @Output() newItemEvent = new EventEmitter<String>();
  
  addNewItem(value:string){
    if(value.length){
      this.newItemEvent.emit(value);
    }
  }
}
