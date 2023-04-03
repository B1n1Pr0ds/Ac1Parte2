import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-imc',
  templateUrl: './calculadora-imc.component.html',
  styleUrls: ['./calculadora-imc.component.css']
})
export class CalculadoraIMCComponent {
  altura: number = 0;
  peso: number = 0;
  imc: number = 0;
  message: string='';

    Calcular()
    {
    if(this.altura > 0.01 && this.altura < 3 && this.peso > 1 && this.peso < 500)
    {
      this.imc = this.peso	/ (this.altura * this.altura);
      if(this.imc < 18.5)
      this.message = 'Seu imc é ' + this.imc + ', Você está abaixo do peso normal!';
      if(this.imc >= 18.5 && this.imc <= 24.9)
      this.message = 'Seu imc é ' + this.imc + ', Você está dentro do peso normal!';
      if(this.imc >=25 && this.imc <= 29.9)
      this.message = 'Seu imc é ' + this.imc + ', Você está com excesso de peso!';
      if(this.imc >=30 && this.imc <= 34.9)
      this.message = 'Seu imc é ' + this.imc + ', Você está com grau de obesidade I!';
      if(this.imc >=35 && this.imc <=39.9)
      this.message = 'Seu imc é ' + this.imc + ', Você está com grau de obesidade II!';
      if(this.imc > 40)
      this.message = 'Seu imc é ' + this.imc + ', Você está com grau de obesidade III!';
    }
    else
    {
      this.message = 'Por favor, insira um valor válido para altura ou peso'
    }
    }
}
