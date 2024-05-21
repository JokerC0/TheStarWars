import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-barra-paginacion',
  templateUrl: './barra-paginacion.component.html',
  styleUrls: ['./barra-paginacion.component.css']
})
export class BarraPaginacionComponent implements OnInit {

  @Input('siguientes') siguientes: string | null;
  @Input('anteriores') anteriores: string | null;
  @Input('total') total: number;
  @Input('porPagina') porPagina: number;
  @Input('paginas') paginas: number;
  @Input('pagina') pagina: number;

  @Output() paginar: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();

  constructor() { 
  }

  ngOnInit() {  
  }

  deshabilitar(tipo: string): boolean {
        
    return (this[tipo] === undefined || this[tipo] === null);

  }

  pasarPagina(tipo: string) {

    console.log('Paginando a: ' + tipo);

    let nuevaPagina: number = tipo === 'siguientes' ? this.pagina + 1 : this.pagina - 1;
    
    console.log('Nueva página: ' + nuevaPagina);

    this.paginar.emit([this[tipo], nuevaPagina]);

  }

}
