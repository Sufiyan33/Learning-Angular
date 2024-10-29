import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToInr',
  standalone: true
})
export class UsdToInrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [x]=args;
    return value * x;
  }

}
