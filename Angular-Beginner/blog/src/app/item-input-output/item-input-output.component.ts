import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-input-output',
  standalone: true,
  imports: [],
  templateUrl: './item-input-output.component.html',
  styles: ``
})
export class ItemInputOutputComponent {
  @Input() item = '';
  @Output() deleteRequest = new EventEmitter<String>();

  lineThrough = '';

  delete(){
    console.warn('child says: emitting item deleteRequest with', this.item);
    this.deleteRequest.emit(this.item);
    this.lineThrough = this.lineThrough ? '' : 'line-through';
  }
}
