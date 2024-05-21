import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

import { APP_VALUES, AppValues } from '../../app-config.module';

import { BuscarService } from '../../service/buscar.service';
import { BuzonService } from '../../service/buzon.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  private tipo: string;

  accionesListado: Array<string>;
  columnasListado: Array<any>;
  pagina: number;
  campoOrdenListado: string;
  tituloListado: string = '';

  constructor( private route: ActivatedRoute,
    private router: Router,
    @Inject(APP_VALUES) private values: AppValues,
    private _buscar: BuscarService,
    private _buzon: BuzonService) {

    console.log('BuscarComponent. Construct');
    console.log('BuscarComponent. Valores configuración: ', this.values);

    this.route.params
      .subscribe((parametros) => {

        console.log('BuscarComponent. Parametros recibidos: ', parametros);
        this.tipo = parametros['tipo'];

        this._buscar.setTipo(this.tipo);
        this._buscar.setUrl(this.tipo);
        this._buscar.setTipoLista(this.tipo);

        this.accionesListado = this.values.accionesListado[this.tipo];
			  this.columnasListado = this.values.columnasListado[this.tipo];
			  this.campoOrdenListado = this.values.campoOrdenListado[this.tipo];
        this.tituloListado = this.values.tituloListado[this.tipo];

        if(this._buzon.tieneContenidoBuzon() &&
          this._buzon.existeValor('componente') &&
          this._buzon.getValor('componente') === 'boton-volver') {

          this.pagina = this._buzon.getValor('pagina');
          this._buscar.cargarEnlace(this._buzon.getValor('urlRetorno'));
          this._buzon.vaciarBuzon();

        } else {

          this._buscar.setBuscado(false);
          this._buscar.iniciarValores();
          this.pagina = 1;

        }

      });

  }

  ngOnInit() {
  }

  /**
   * buscar
   * @param datos
   */
  	buscar(texto: string): void {
     console.log('BuscarComponent. Texto a buscar: ', texto);
     this.pagina = 1;
    this._buscar.buscarPorTexto(texto);
  }

  /**
   * getPlaceHolder
   */
  getPlaceHolder(): string {
    return this.values.buscarPlaceHolder[this.tipo];
  }

  /**
   * paginar
   */
  paginar(datos: Array<any>): void {
    console.log('BuscarComponent. Paginar. Datos: ', datos);
    this.pagina = datos[1];
    this._buscar.cargarEnlace(datos[0]);
  }

  /**
   * getTotal
   */
  getTotal(): number {
    return this._buscar.getTotal();
  }

  /**
   * getCargando
   */
  getCargando(): boolean {
    return this._buscar.getCargando();
  }

  /**
   * getBuscado
   */
  getBuscado(): boolean {
    return this._buscar.getBuscado();
  }

  /**
   * getError
   */
  getError(): boolean {
    return this._buscar.getError();
  }

  /**
   * getListado
   */
  getListado(): Array<any> {
    return this._buscar.getLista();
  }

  /**
   * getEnlaceAnteriores
   */
  getEnlaceAnteriores(): string {
    return this._buscar.getEnlaceAnteriores();
  }

  /**
   * getEnlaceSiguientes
   */
  getEnlaceSiguientes(): string {
    return this._buscar.getEnlaceSiguientes();
  }

  /**
   * getMostrarPaginacion
   */
  getMostrarPaginacion(): boolean {
    return (this._buscar.getTotal() > this._buscar.getLista().length);
  }

  /**
   * getPorPagina
   */
  getPorPagina(): number {
    return this._buscar.getPorPagina();
  }

  /**
   * getPaginas
   */
  getPaginas(): number {
    return this._buscar.getPaginas();
  }

  /**
   * ejecutarAccion
   */
  ejecutarAccion(datos: any) {

    console.log('BuscarComponent. Ejecutar acción: ', datos);

    let datosEnviar: any = {
        'item': datos,
        'urlRetorno': this._buscar.getUrl(),
        'pagina': this.pagina,
        'componente': 'buscar'
    };

    this._buzon.setBuzon(datosEnviar);
    this.router.navigate(['ficha', this.tipo]);

  }

  /**
   * getTituloBusqueda
   */
  getTituloBusqueda(): string {

    return this.values.titulosBusqueda[this.tipo];

  }

}
