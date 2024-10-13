import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  template: `
    <p class="custom">
      Created Student Component!!!
    </p>
  `,
  styles: `
    .custom{color:Blue}
  `
})
export class StudentComponent {

}
