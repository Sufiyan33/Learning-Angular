import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [],
  templateUrl: './item-details.component.html',
  styles: ``
})
export class ItemDetailsComponent {
  @Input() item = ''; //decorate property with @Input tag.
}
