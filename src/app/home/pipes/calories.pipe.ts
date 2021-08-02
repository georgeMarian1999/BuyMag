import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calories'
})
export class CaloriesPipe implements PipeTransform {

  transform(value:number|undefined): string |null {
    if(value)
      return value.toString()+'KCal/100gr';
    else return null;
  }

}
