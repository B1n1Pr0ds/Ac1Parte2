import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculadoraIMCComponent } from './calculadora-imc/calculadora-imc.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'calculadora-imc', component: CalculadoraIMCComponent},
  {path:'**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
