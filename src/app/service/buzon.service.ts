import { Injectable } from '@angular/core';

@Injectable()
export class BuzonService {

  private buzon: any = null;

  constructor() { }

  setBuzon(contenido: any) {
    this.buzon = contenido;
  }

  getBuzon(): any {
    return this.buzon;
  }

  vaciarBuzon(): void {
    this.buzon = null;
  }

  tieneContenidoBuzon(): boolean {
    return (this.buzon !== null);
  }

  existeValor(valor: string): boolean {
    return (this.buzon !== null && this.buzon.hasOwnProperty(valor));
  }

  getValor(valor: string): any {
    if(this.existeValor(valor)) {
      return this.buzon[valor];
    } else {
      return null;
    }
  }

}
