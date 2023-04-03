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
      this.message = 'Seu imc é ' + this.imc;
    }
    else
    {
      this.message = 'Por favor, insira um valor válido para altura ou peso'
    }
    }
}
