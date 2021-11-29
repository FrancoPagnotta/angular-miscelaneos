import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  alerta: string = 'info';

  alertas: Array<string> = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'dark',
    'light',
    'info'
  ];

  contador: number = 0;

  constructor() {}
    
    ngOnInit(): void {
    }
    
    cambiarAlerta() {
    this.alerta = this.alertas[this.contador];
    this.contador += 1;
    if (this.contador === this.alertas.length) this.contador = 0;
  }

}
