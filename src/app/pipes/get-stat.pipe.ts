import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Pipe({
  name: 'getStat',
  standalone: true,
})
export class GetStatPipe implements PipeTransform {

  transform(value: Pokemon, nameStat): number {
    const statFound = value.stats.find(s => s.stat.name == nameStat);
    if (statFound) {
      return statFound.base_stat;
    }
    return 0;
  }

}
