import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, search: string): any {
    if (!search) {
      return value
    }
    let solution = value.filter(v =>{
      if (!v) {
        return;
      }
      // console.log(v)
      return v.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      // return v.toLowerCase().includes(search)
  
  
    })
    // console.log(solution)
  
    return solution;
  }

}
