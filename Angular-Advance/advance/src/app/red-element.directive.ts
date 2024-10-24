import { Directive } from '@angular/core';

@Directive({
  selector: '[appRedElement]',
  standalone: true
})
export class RedElementDirective {

  constructor() { }

}
