import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APP_MENU, AppMenu } from 'src/app/app-config.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private router: Router,
    @Inject(APP_MENU) private menu: AppMenu) { }

ngOnInit() {

console.log('HomeComponent. ngOnInit.', this.menu);

}

irA(tipo: string): void {

console.log('HomeComponent. Ir a: ', tipo);

this.router.navigate(['/buscar', tipo]);
}

getOpciones(): Array<any>{

return this.menu.opciones;

}
}
