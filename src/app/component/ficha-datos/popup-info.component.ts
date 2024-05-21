import { Component, Input, Output, OnInit, OnDestroy, Renderer2, EventEmitter } from '@angular/core';
import { BuzonService } from '../../service/buzon.service';

@Component({
  selector: 'app-popup-info',
  templateUrl: './popup-info.component.html',
  styleUrls: ['./popup-info.component.css']
})
export class PopupInfoComponent implements OnInit, OnDestroy {

  tipo: string;
  item: any;

  mostrar: boolean;

  @Output('cerrar') cerrar: EventEmitter<void> = new EventEmitter<void>();

  constructor(private renderer: Renderer2,
              private _buzon: BuzonService) {
  }

  ngOnInit() {

    console.log('PopupInfoComponent. OnInit');

    this.mostrar = false;

    this.renderer.addClass(document.body, 'no-overflow');

    this.tipo = this._buzon.getValor('tipo');
    this.item = this._buzon.getValor('item');

  }

  ngOnDestroy() {

    console.log('PopupInfoComponent. OnDestroy');

    this.renderer.removeClass(document.body, 'no-overflow');

  }

  /**
   * cerrarVentana
   */
  cerrarVentana(): void {
    this.cerrar.emit();
  }

  /**
   * mostrarComponentes
   */
  mostrarComponentes(): void {

    console.log('PopupInfoComponents. Cargados datos ficha');
    this.mostrar = true;

  }

}
