import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AgendamientosModule } from './modules/agendamientos/agendamientos.module';
import { AutosModule } from './modules/Autos/autos.module';
import { HomeModule } from './modules/home/home.module';
import { LoginModule } from './modules/login/login.module';
import { ServiciosModule } from './modules/servicios/servicios.module';
import { UsuariosModule } from './modules/Usuarios/usuarios.module';
import {MenubarModule} from 'primeng/menubar';
import { AuthService } from './shared/services/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MenubarModule,
    SharedModule,
    ButtonModule,
    LoginModule,
    AutosModule,
    AgendamientosModule,
    ServiciosModule,
    HomeModule,
    UsuariosModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }