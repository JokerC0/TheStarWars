import { Injectable, Inject } from '@angular/core';
import { DataService } from '../service/data.service';

import { APP_CONFIG, AppUrl } from '../app-config.module';

import { Planeta, Pelicula } from '../interfaces/interfaces';

import { Observable } from 'rxjs';

@Injectable()
export class BuscarService {

  private tipo!: string;
  private url!: string;
  private baseUrl!: string;

  private cargando!: boolean;
  private error!: boolean;
  private buscado!: boolean;
  private porPagina!: number;
  private paginas!: number;

  private total!: number;
  private enlaceSiguientes!: string;
  private enlaceAnteriores!: string;
  private lista!: Array<any>;

  constructor(private data: DataService,
    @Inject(APP_CONFIG) private config: AppUrl) {

    console.log('BuscarService. Construct');

  }

	/**
	* Inicializacion de valores
	*/
	iniciarValores() {

    this.url = '';

		this.cargando = false;
    this.error = false;
    this.buscado = false;
    this.porPagina = 0;
    this.paginas = 0;

    this.total = 0;
    this.enlaceSiguientes = '';
    this.enlaceAnteriores = '';
    this.lista = [];

	}

  /**
   * setTipo
   * @param tipo
   */
  setTipo(tipo: string) {
    this.tipo = tipo;
  }

  /**
   * setBuscado
   * @param valor
   */
  setBuscado(valor: boolean) {
    this.buscado = valor;
  }

  /**
   * setUrl
   * @param tipo
   */
  setUrl(tipo: string) {
    this.baseUrl = this.config.api_url + tipo + '/';
  }

  /**
   * setTipoLista
   * @param tipo
   */
  setTipoLista(tipo: string) {

    switch(tipo) {

      case 'films':
        this.lista as Array<Pelicula>;
        break;

      case 'planets':
        this.lista as Array<Planeta>;
        break;

      case 'species':
        break;

    }

  }

  /**
   * getUrl
   */
  getUrl(): string {
    return this.url;
  }

  /**
   * getCargando
   */
  getCargando(): boolean {
    return this.cargando;
  }

  /**
   * getError
   */
  getError(): boolean {
    return this.error;
  }

  /**
   * getBuscado
   */
  getBuscado(): boolean {
    return this.buscado;
  }

  /**
   * buscarPorTexto
   * @param texto
   */
  buscarPorTexto(texto: string) {

    this.url = this.baseUrl + '?search=' + texto;
    this.cargarDatos();

  }

  /**
   * cargarEnlace
   * @param url
   */
  cargarEnlace(url: string) {
    this.url = url;
    this.cargarDatos();
  }

  /**
   * getTotal
   */
  getTotal(): number {
    return this.total;
  }

  /**
   * getLista
   */
  getLista() {
    return this.lista;
  }

  /**
   * getEnlaceAnteriores
   */
  getEnlaceAnteriores(): string {
    return this.enlaceAnteriores;
  }

  /**
   * getEnlaceSiguientes
   */
  getEnlaceSiguientes(): string {
    return this.enlaceSiguientes;
  }

  /**
   * getPorPagina
   */
  getPorPagina(): number {
    return this.porPagina;
  }

  /**
   * getPaginas
   */
  getPaginas(): number {
    return this.paginas;
  }

  /**
   * cargarDatos
   * @param url
   */
  private cargarDatos(): void {

    console.log('BuscarService. Cargar datos (' + this.tipo + '). URL: ' + this.url);

    this.cargando = true;
    this.error = false;
    this.buscado = false;

    this.data.getData(this.url)
    .subscribe(
      (data) => {

        console.log('BuscarService. Cargar datos (' + this.tipo + '). Resultado: ', data);

        this.total = data.count;
        this.enlaceSiguientes = data.next;
        this.enlaceAnteriores = data.previous;
        this.lista = data.results;

        if(this.enlaceAnteriores === null) {
          this.paginas = Math.ceil(this.total / this.lista.length);
          this.porPagina = this.lista.length;
        }

      },
      (error) => {

        console.log('BuscarService. Cargar datos (' + this.tipo + '). Error: ', error);
        this.error = true;

      },
      () => {

        console.log('BuscarService. Cargar datos (' + this.tipo + '). Finalizado.');
        this.cargando = false;
        this.buscado = true;

      }
    );

  }

  /**
   * buscarRelacionados
   */
  buscarRelacionados(indices: Array<string>, listas: Array<any>, info: any, totalRelacionados: number): Observable<string> {

    return new Observable(observable => {

      let relacionadosCargados = 0;

      for(let l = 0; l < indices.length; l++) {

        let idx = indices[l];

        listas[idx] = [];

        if(info[idx].length) {

          for(let s = 0; s < info[idx].length; s++) {

            this.data.getData(info[idx][s])
              .subscribe(
                (datos) => {
                  //console.log('BuscarService. Cargando datos para ' + idx + ':', datos);
                  listas[idx].push(datos);
                },
                (error) => {
                  console.log(error);
                },
                () => {
                  relacionadosCargados++;
                  observable.next(info[idx][s]);
                  if(relacionadosCargados >= totalRelacionados){                    
                    observable.complete();
                  }
                }
              );

          } 

        }

      }

    });
    
  }

}
