import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { APP_ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { MenubarComponent } from './component/menubar/menubar.component';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';

import { BuscarComponent } from './component/search/buscar.component';
import { CajaBusquedaComponent } from './component/caja-busqueda/caja-busqueda.component';
import { TablaListadoComponent } from './component/tabla-listado/tabla-listado.component';
import { BarraPaginacionComponent } from './component/barra-paginacion/barra-paginacion.component';
import { BotonVolverComponent } from './component/boton-volver/boton-volver.component';

import { AppConfigModule } from './app-config.module';

// Servicios
import { BuscarService } from './service/buscar.service';
import { DataService } from './service/data.service';
import { BuzonService } from './service/buzon.service';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    CardComponent,
    BuscarComponent,
    BarraPaginacionComponent,
    CajaBusquedaComponent,
    TablaListadoComponent,
    BotonVolverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppConfigModule
  ],
  providers: [
    DataService,
    BuscarService,
    BuzonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
