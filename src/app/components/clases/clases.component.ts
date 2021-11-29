import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  alerta: string = 'alert-danger';

  propiedades: any = {
    danger: true,
  };

  loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ejecutar(): void {
    this.loading = true;
    timer(3500).subscribe(() => this.loading = false);
  }

}
