import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {routing, appRoutingProviders} from './app.routing';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { RegisterComponent } from './components/register/register.component';
import { TurnosComponent } from './components/turnos/turnos.component';
import { TurnoaceptadoComponent } from './components/turnoaceptado/turnoaceptado.component';
import { TurnorechazadoComponent } from './components/turnorechazado/turnorechazado.component';
import {IdentityGuard} from './services/identity.guard';
import {UserService} from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    RegisterComponent,
    TurnosComponent,
    TurnoaceptadoComponent,
    TurnorechazadoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule,
  ],
  providers: [appRoutingProviders,
  IdentityGuard,
  UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
