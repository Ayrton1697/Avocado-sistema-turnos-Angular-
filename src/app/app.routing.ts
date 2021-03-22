import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

//Importar componentes
import {AdminComponent} from './components/admin/admin.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {TurnosComponent} from './components/turnos/turnos.component';
import {TurnoaceptadoComponent} from './components/turnoaceptado/turnoaceptado.component';
import {TurnorechazadoComponent} from './components/turnorechazado/turnorechazado.component';
import { ErrorComponent } from './components/error/error.component';

//Guard
import {IdentityGuard} from './services/identity.guard';

//Definir rutas
const appRoutes :Routes=[
   {path : 'home', component: HomeComponent},
   {path : 'admin', component: AdminComponent, canActivate:[IdentityGuard]},
   {path : 'login' ,component:LoginComponent},
   {path : 'turnos', component:TurnosComponent,canActivate:[IdentityGuard]},
   {path : 'turnos/aceptados', component:TurnoaceptadoComponent,canActivate:[IdentityGuard]},
   {path : 'turnos/rechazados', component:TurnorechazadoComponent,canActivate:[IdentityGuard]},
   {path :'register', component:RegisterComponent,canActivate:[IdentityGuard]},
   {path : '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes); 
