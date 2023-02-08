import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroFecha'
})

export class FiltroFechaPipe implements PipeTransform {

  transform(row: any, f1: Date, f2: Date): any {

const resultadoFiltro = [];
let date1 = new Date(f1);
let date2 = new Date(f2);

if (f1 >= f2 || f1 == null) {
  return row;
}

if (f2 == null) {
  f2 = new Date();
}

for (const filteredRow of row) {
  let a = new Date(filteredRow.calendar);

  if (a > date1 && a <= date2) {
    console.log('Date Test1 ' + a + ' - ' + date1)
    resultadoFiltro.push(filteredRow);
  }

  else if (a >= date1 && a <= date2) {
    console.log('Date Test2 ' + a + ' - ' + date1)
    resultadoFiltro.push(filteredRow);
  }

  if (a == date1 && a == date2) {
    console.log('Date Test3 ' + a + ' - ' + date1)
  }

}

return resultadoFiltro;
  }
}
