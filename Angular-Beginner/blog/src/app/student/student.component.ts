import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  template: `
    <p class="custom">
      Created Student (inline-template & inline-style) Component!!!
    </p>
  `,
  styles: `
    .custom{color:Blue}
  `
})
export class StudentComponent {

}
