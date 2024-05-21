import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BuzonService } from '../../service/buzon.service';

@Component({
  selector: 'app-boton-volver',
  templateUrl: './boton-volver.component.html',
  styleUrls: ['./boton-volver.component.css']
})
export class BotonVolverComponent implements OnInit {

  urlRetorno: string = '';
  pagina: string = '';

  @Input('tipo') tipo: string;

  constructor(private router: Router,
              private _buzon: BuzonService) {
  }

  ngOnInit() {

    if(this._buzon.tieneContenidoBuzon() &&
      this._buzon.getBuzon().hasOwnProperty('componente') &&
      this._buzon.getBuzon()['componente'] == 'buscar') {

      this.urlRetorno = this._buzon.getBuzon()['urlRetorno'];
      this.pagina = this._buzon.getBuzon()['pagina'];

    }

    console.log('BotonVolverComponent. Tipo: ', this.tipo);

  }

  /**
   * volver
   */
  volver(): void {

    this._buzon.vaciarBuzon();
    this._buzon.setBuzon({
      'urlRetorno': this.urlRetorno,
      'pagina': this.pagina,
      'componente': 'boton-volver'
    });

    this.router.navigate(['buscar', this.tipo]);

  }

}
