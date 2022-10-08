import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { YoprogLogoComponent } from './components/yoprog-logo/yoprog-logo.component';
import { LoginComponent } from './components/login/login.component';
import { RSocialesComponent } from './components/r-sociales/r-sociales.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExpYEducComponent } from './components/exp-yeduc/exp-yeduc.component';
import { HardSoftSkilComponent } from './components/hard-soft-skil/hard-soft-skil.component';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    YoprogLogoComponent,
    LoginComponent,
    RSocialesComponent,
    PerfilComponent,
    AcercaDeComponent,
    ExpYEducComponent,
    HardSoftSkilComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
