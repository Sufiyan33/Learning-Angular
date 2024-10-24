import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedElement]',
  standalone: true
})
export class RedElementDirective {

  constructor(e1: ElementRef) {
    e1.nativeElement.style.color="red";
    e1.nativeElement.style.backgroundColor = "black";
   }

}
