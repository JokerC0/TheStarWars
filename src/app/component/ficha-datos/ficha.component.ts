import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { APP_VALUES, AppValues } from '../../app-config.module';

import { Personaje, Pelicula, Nave, Vehiculo, Especie, Planeta } from '../../interfaces/interfaces';

import { BuscarService } from '../../service/buscar.service';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit {

  @Input('tipo') tipo: string;
  @Input('info') info: any;
  @Input('clicable') clicable: boolean;

  @Output('masInfo') masInfo: EventEmitter<any> = new EventEmitter<any>();
  @Output('cargado') cargado: EventEmitter<void> = new EventEmitter<void>();

  cargando: boolean;

  numeroRelacionados: number;
  relacionadosCargados: number;

  listas: any = {};
  indicesListas: Array<string>;

  private hogar: any;

  constructor(@Inject(APP_VALUES) private values: AppValues,
              private router: Router,
              private _buscar: BuscarService,
              private _data: DataService) {

    this.cargando = true;
    if(this.clicable === undefined) this.clicable = false;

  }


  ngOnInit() {

    if(this.tipo === 'characters' || this.tipo === 'residents') this.tipo = 'people';

    switch(this.tipo) {
      case 'people':
        this.info as Personaje;
      break;
      case 'films':
        this.info as Pelicula;
      break;
      case 'starships':
        this.info as Nave;
      break;
      case 'vehicles':
        this.info as Vehiculo;
      break;
      case 'species':
        this.info as Especie;
      break;
      case 'planets':
        this.info as Planeta;
      break;
    }

    console.log('FichaComponent. NgOnInit', this);

    if(this.info === undefined || this.info === null) {

      this.router.navigate(['home']);

    } else {

      console.log('FichaComponent. Tipo de ficha: ', this.tipo);
      console.log('FichaComponent. Datos de ficha: ', this.values.datosFicha[this.tipo]);

      this.indicesListas = [];
      this.numeroRelacionados = 0;

      for(let item of this.values.datosFicha[this.tipo]) {
        if(item.tipo === 'lista') {
          this.indicesListas.push(item.campo);
          this.numeroRelacionados += this.info[item.campo].length;
        }
      }

      console.log('FichaComponent. Datos relacionados (' + this.numeroRelacionados + ') - indices', this.indicesListas);

      if(this.numeroRelacionados === 0) {

        this.cargando = false;

      } else {

        this.cargarDatosRelacionados();

      }

    }

  }


  private cargarDatosRelacionados(): void {

    this._buscar
    .buscarRelacionados(
        this.indicesListas,
        this.listas,
        this.info,
        this.numeroRelacionados)
    .subscribe(
      (data) => {
        //console.log('FichaPlanetaComponent. Cargada url relacionada: ', data);
      },
      (error) => {
        console.log(error);
      },
      () => {

        console.log('FichaComponent.Datos relacionados - lista.', this.listas);

        if(this.values.contieneDatoHogar[this.tipo]) {

          if(this.info.homeworld !== null) {

            this.cargarDatosHome();

          } else {

            this.noHomeWorld();

          }

        } else {

          this.noHomeWorld();

        }

      }

    );

  }


  cargarDatosHome(): void {

    this._data
      .getData(this.info.homeworld)
      .subscribe(
        (data) => {

          this.hogar as Planeta;
          this.hogar = data;
          console.log('FichaComponent. Datos hogar: ', data);

        },
        (error) => {
          console.log('FichaComponent. Error cargando datos hogar: ', error);
        },
        () => {
          this.cargando = false;
          this.cargado.emit();
        }
      );

  }


  getHogarData(): string {

    let retorno: string = '';

    if(typeof this.hogar === 'string') {
      retorno = this.hogar;
    } else {
      retorno = this.hogar.name;
    }

    return retorno;

  }

  private noHomeWorld(): void {

    this.hogar as string;
    this.hogar = 'N/A';
    this.cargando = false;
    this.cargado.emit();

  }

 
  abrirHogar() {

    console.log('FichaComponent. Abrir Hogar');

    this.masInfo.emit({
      'tipo': 'planets',
      'item': this.hogar
    });

  }


  getListaCampos(): Array<any> {

    return this.values.datosFicha[this.tipo];

  }

  mostrarLista(tipo: string): boolean {

    return (this.listas[tipo].length > 0);

  }


  getLista(tipo: string): Array<any> {

    return this.listas[tipo];

  }

 
  abrirFicha(tipo: string, item: any) {

    this.masInfo.emit({
      'tipo': tipo,
      'item': item
    });

  }


  muestraSubtitulo(item: any): boolean {

    var retorna: boolean = false;

    if(item.tipo === 'texto' && item.subtitulo) retorna = true;

    return retorna;

  }


  muestraTextoMasInformacion(item: any): boolean {

    var retorna: boolean = false;

    if(item.tipo === 'lista' && this.clicable && this.mostrarLista(item.campo)) retorna = true;

    if(item.tipo === 'hogar' && this.clicable && typeof this.hogar !== 'string') retorna = true;

    return retorna;

  }

}
