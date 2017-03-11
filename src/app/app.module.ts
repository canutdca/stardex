import { VehiculosModule } from './vehiculos/vehiculos.module';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { NavesModule } from './naves/naves.module';
import { PlanetasModule } from './planetas/planetas.module';
import { PlanetasComponent } from './planetas/planetas.component';
import { EspeciesModule } from './especies/especies.module';
import { EspeciesComponent } from './especies/especies.component';
import { ApiService } from './shared/api.service';
import { DatosService } from './shared/datos.service';
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
import { NavesComponent } from './naves/naves.component';

const routes: Routes = [
  { path: '', component: PersonajesComponent },
  { path: 'inicio', redirectTo: '' },
  { path: 'Personajes', component: PersonajesComponent },
  { path: 'Peliculas', component: PeliculasComponent },
  { path: 'NavesEspaciales', component: NavesComponent },
  { path: 'Vehiculos', component: VehiculosComponent },
  { path: 'Especies', component: EspeciesComponent },
  { path: 'Planetas', component: PlanetasComponent },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PersonajesModule,
    PeliculasModule,
    EspeciesModule,
    PlanetasModule,
    NavesModule,
    VehiculosModule,
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
