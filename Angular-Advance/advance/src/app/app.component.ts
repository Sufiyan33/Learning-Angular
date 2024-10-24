import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RedElementDirective } from './red-element.directive'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RedElementDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular Advance Topics';
  directiveTitle = 'Hello!!! Welcome to directive.';
}
