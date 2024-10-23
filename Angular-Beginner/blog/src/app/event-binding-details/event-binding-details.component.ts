import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../user-list/user-list.component';

@Component({
  selector: 'app-event-binding-details',
  standalone: true,
  imports: [],
  templateUrl: './event-binding-details.component.html',
  styleUrl: './event-binding-details.component.css'
})
export class EventBindingDetailsComponent {

  @Input() item!: Item;
  itemImageUrl= 'https://i.ebayimg.com/thumbs/images/g/9FEAAOSwwUhgR8XB/s-l96.jpg';
  lineThrough='';
  displayNone='';

  @Input() prefix = '';

  // This component makes a request but it can't actually delete a hero.
  @Output() deleteRequest = new EventEmitter<Item>;

  delete(){
    this.deleteRequest.emit(this.item);
    this.displayNone = this.displayNone ? '': 'none';
    this.lineThrough = this.lineThrough ? '': 'line-through';
  }
}
