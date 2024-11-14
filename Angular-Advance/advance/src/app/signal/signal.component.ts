import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {
  fistName = signal("Angular 18")
  rollNo = signal<number>(124)

  //Now lets check it changing name automatically
  constructor(){
    const fName = this.fistName();
    setTimeout(() => {
      this.fistName.set('Dot net')
    }, 3000);
  }

  // Not to check actuall things disable change detection
  changeName(){
    this.fistName.set("Testing signal change state")
  }
}