import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-twobinding-sizer',
  standalone: true,
  imports: [],
  templateUrl: './twobinding-sizer.component.html',
  styleUrl: './twobinding-sizer.component.css'
})
export class TwobindingSizerComponent {

  @Input() size!: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  dec(){
    this.resize(-1);
  }
  inc(){
    this.resize(+1);
  }

  resize(delta: number){
    this.size = Math.max(40, Math.max(8, +this.size+delta));
    this.sizeChange.emit(this.size);
  }
}
