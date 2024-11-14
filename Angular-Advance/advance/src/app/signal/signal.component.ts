import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {
  fistName = signal("Angular 18")
  rollNo = signal<number>(124)

  constructor(){
    const fName = this.fistName();
  }
}
