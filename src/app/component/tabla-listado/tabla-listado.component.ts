import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-listado',
  templateUrl: './tabla-listado.component.html',
  styleUrls: ['./tabla-listado.component.css']
})
export class TablaListadoComponent implements OnInit {

  @Input('columnas') columnas: Array<any>;
  @Input('datos') datos: Array<any>;
  @Input('campoOrden') campoOrden: string;
  @Input('acciones') acciones: Array<string>;
  @Input('titulo') titulo: string = '';

  @Output('ejecutar') ejecutarAccion: EventEmitter<any> = new EventEmitter<any>();
  constructor() {    
  }

  ngOnInit() {

    if(this.campoOrden === undefined) this.campoOrden = '';

    console.log('Columnas:');
    console.log(this.columnas);
    console.log('Datos:');
    console.log(this.datos);
    console.log('Campo orden: ' + this.campoOrden);
    
  }

  ejecutar(item) {
    console.log('TablaListadoComponent. Ejecutar acción: ', item);
    this.ejecutarAccion.emit(item);
  }

}
