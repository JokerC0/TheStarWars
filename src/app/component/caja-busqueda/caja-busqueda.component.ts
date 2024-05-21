import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-caja-busqueda',
  templateUrl: './caja-busqueda.component.html',
  styleUrls: ['./caja-busqueda.component.css']
})
export class CajaBusquedaComponent implements OnInit {

  public textoBusqueda: string;
  public error: boolean;

  @Input('placeholder') placeholder: string = '';
  @Output() buscar: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.error = false;
  }

  ngOnInit() {
  }

  /**
   * ejecutaBusqueda
   */
  public ejecutaBusqueda() {

    this.error = false;

    if(!this.textoBusqueda) {

      this.error = true;

    } else {

      console.log('CajaBusquedaComponent. Texto a buscar: ' + this.textoBusqueda);
      this.buscar.emit(this.textoBusqueda);

    }

  }

}
