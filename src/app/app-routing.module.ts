import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistroComponent} from './registro/registro.component';
import {LoginComponent} from './login/login.component';
import {AnimalComponent} from './animal/animal.component';
import { BusquedaComponent} from './busqueda/busqueda.component'


const routes: Routes = [
  { path:'', component:LoginComponent},
  { path:'registro', component:RegistroComponent},
  { path:'login', component:LoginComponent},
   { path:'animal', component:AnimalComponent},
   { path:'busqueda', component:BusquedaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
