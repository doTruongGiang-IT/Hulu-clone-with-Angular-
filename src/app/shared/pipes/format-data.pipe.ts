import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatData'
})
export class FormatDataPipe implements PipeTransform {

  transform(value: any, ...args: any[]): string {
    return value.substr(0, args) + "...";
  }

}
