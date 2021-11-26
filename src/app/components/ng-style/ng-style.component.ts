import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <!-- <p [ngStyle]="{'font-size' : '20px'}"> -->
    <!-- <p [ngStyle]="{'font-size': tamanio + 'px'}"> -->
    <!-- <p [ngStyle]="{'font-size': tamanio + 'px', 'color' : 'red'}"> -->
    <!-- <p [style.fontSize]="'40px'"> --> <!-- De esta forma, en todas las propiedades que en css llevan guion, omitimos el guion y lo ponemos en camelCase -->
    <!-- <p [style.fontSize.px]="tamanio">  --> <!-- Tambien funciona con em, rem y % -->
    <p [style.fontSize.px]="tamanio">
      Hola Mundo... Esta es una etiqueta html
    </p>

    <button (click)="tamanio = tamanio + 5" class="btn btn-primary m-2">
      <i class="fa fa-plus"></i>
    </button>

    <button (click)="tamanio = tamanio - 5" class="btn btn-primary m-2">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  tamanio: number = 16;

  constructor() { }

  ngOnInit(): void {
  }

}
