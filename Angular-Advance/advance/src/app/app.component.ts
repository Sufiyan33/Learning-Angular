import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RedElementDirective } from './red-element.directive'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RedElementDirective, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular Advance Topics';
  directiveTitle = 'Hello!!! Welcome to directive.';

  userLogin(item:any){
    console.warn(item)
  }
}
