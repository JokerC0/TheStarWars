import { Component, ComponentRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BuzonService } from '../../service/buzon.service';
import { Personaje, Pelicula, Nave, Vehiculo, Especie, Planeta } from '../../interfaces/interfaces';


@Component({
  selector: 'app-ficha-datos',
  templateUrl: './ficha-datos.component.html',
  styleUrls: ['./ficha-datos.component.css']
})
export class FichaDatosComponent implements OnInit {

  tipo: string;
  item: any = null;
  urlRetorno: string;

  mostrarPopUp: boolean = false;

  cargando: boolean = false;

  constructor(private route: ActivatedRoute,
              private _buzon: BuzonService) {

    this.tipo = '';
    this.urlRetorno = '';

    this.route.params.subscribe((datos) => {

      this.tipo = datos.tipo;

      console.log('FichaDatosComponent. Datos recibidos: ');
      console.log('Tipo: ', this.tipo);

      // se comprueba si el buzón tiene contenido
      if(this._buzon.tieneContenidoBuzon()) {

        let contenidoBuzon = this._buzon.getBuzon();

        console.log('FichaDatosComponent. ContenidoBuzón: ', contenidoBuzon);

        if(contenidoBuzon.hasOwnProperty('item')) {

          switch(this.tipo) {

            case 'people':
              this.item as Personaje;
            break;

            case 'films':
              this.item as Pelicula;
            break;

            case 'starships':
              this.item as Nave;
            break;

            case 'vehicles':
              this.item as Vehiculo;
            break;

            case 'species':
              this.item as Especie;
            break;

            case 'planets':
              this.item as Planeta;
            break;

          }

          this.item = contenidoBuzon.item;

        }
        if(contenidoBuzon.hasOwnProperty('urlRetorno')) this.urlRetorno = contenidoBuzon.urlRetorno;

      }

    });

  }

  ngOnInit() {
    console.log('FichaDatosComponent. OnInit');
    this.cargando = true;
  }

  /**
   * masInfo
   * @param event
   */
  masInfo(event: any): void {

    console.log('FichaDatosComponent. MasInfo datos recibidos: ', event);

    this._buzon.vaciarBuzon();
    this._buzon.setBuzon(event);

    this.mostrarPopUp = true;

  }

  /**
   * cerrarMasInfo
   */
  cerrarMasInfo(): void {

    this.mostrarPopUp = false;

    this._buzon.vaciarBuzon();

  }

  datosCargados(): void {
    this.cargando = false;
  }

}
