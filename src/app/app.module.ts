import { ApiService } from './shared/api.service';
import { DatosService } from './shared/datos.service';
import { SharedModule } from './shared/shared.module';
import { HttpToolsService } from './shared/http-tools-service.service';
import { HeaderComponent } from './header/header.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PeliculasModule } from './peliculas/peliculas.module';
import { PersonajesComponent } from './personajes/personajes.component';
import { PersonajesModule } from './personajes/personajes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CardComponent } from './shared/card/card.component';

const routes: Routes = [
  { path: '', component: PersonajesComponent },
  { path: 'inicio', redirectTo: '' },
  { path: 'Personajes', component: PersonajesComponent },
  { path: 'Peliculas', component: PeliculasComponent },
  { path: 'NavesEspaciales', component: PeliculasComponent },
  { path: 'Vehiculos', component: PeliculasComponent },
  { path: 'Especies', component: PeliculasComponent },
  { path: 'Planetas', component: PeliculasComponent },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PersonajesModule,
    PeliculasModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    HttpToolsService,
    ApiService,
    DatosService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
