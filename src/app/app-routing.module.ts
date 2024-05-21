import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './component/search/buscar.component';
import { FichaDatosComponent } from './component/ficha-datos/ficha-datos.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'buscar/:tipo',component: BuscarComponent},
  {path:'ficha/:tipo',component: FichaDatosComponent},
  {path:'**', redirectTo: 'home', pathMatch: 'full'}
];

export const APP_ROUTING = RouterModule.forRoot(routes);
