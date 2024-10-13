import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  template: `
    <p class="custom">
      Created Employee (inline-template) component!!!
    </p>
  `,
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

}
