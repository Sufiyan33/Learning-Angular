import { ChangeDetectionStrategy, Component, computed, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {
  name = signal("Angular 18")
  
  fistName = signal("Sufiyan")
  lastName = signal("Ahmad")
  rollNo = signal<number>(124)

  // Now combine first and last name to a full name...
  fullName = computed(() => this.fistName() +" " + this.lastName())

  //Let check change detection with normal variable.
  courseName: string = "JAVA"

  //Now lets check it changing name automatically.
  constructor(){
    //const fName = this.fistName();
    setTimeout(() => {
      this.name.set('Dot net')
      this.courseName = "HTML"
    }, 3000);
  }

  // Not to check actuall things disable change detection
  changeName(){
    this.name.set("Testing signal change state")
  }

  changeFirstName(){
    this.fistName.set("Alfaz")
  }

  changeLastName(){
    this.lastName.set("Raja")
  }

  // Now let's play with Array.
  cityList = signal(["Pune", "Mumbai"])

  addCity(){
    this.cityList.set([...this.cityList(), "Delhi"])
  }
}
