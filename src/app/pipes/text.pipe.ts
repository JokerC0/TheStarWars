import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "extractoTexto"
})
export class ExtractoTextoPipe implements PipeTransform {

	transform(texto: string, largo: number): string {

    let palabras: Array<string> = texto.split(' ').slice(0, largo);

    return palabras.join(' ');

  }

}

@Pipe({
  name: "listaValores"
})
export class ListaValoresPipe implements PipeTransform {

  transform(texto: string): string {

    return texto.split(',').join('<br>');
    
  }

}
