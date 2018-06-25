import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeUnderscore'
})
export class RemoveUnderscorePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value != null) {
      return value.replace(/_/g, " ");
    }
    
  }

}
