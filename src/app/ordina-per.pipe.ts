import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinaPer'
})
export class OrdinaPerPipe implements PipeTransform {
  transform(dati: any[], ordinamento: string): any[] {
    // Implementa la logica di ordinamento qui
    // Restituisci un nuovo array ordinato
    return dati;
  }
}
