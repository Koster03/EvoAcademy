import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plusFive'
})
export class PlusFivePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return value + 5;
  }

}
