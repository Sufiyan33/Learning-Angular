import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
}
