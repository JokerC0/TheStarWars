import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "formateaFechas"
})
export class FormateaFechasPipe implements PipeTransform {

	transform(texto: string, formatoEntrada: string = 'aaaa-mm-dd', formatoSalida: string = 'dd-mm-aaaa'): string {

    let dia: string;
    let mes: string;
    let anyo: string;
    let salida: string;

    switch(formatoEntrada) {

      case 'aaaa-mm-dd':
      default:
        dia = texto.split('-')[2];
        mes = texto.split('-')[1];
        anyo = texto.split('-')[0];
      break;

    }

    switch(formatoSalida) {

      case 'dd-mm-aaaa':
      default:
        salida = dia + '-' + mes + '-' + anyo;
      break;

    }

    return salida;

  }

}
