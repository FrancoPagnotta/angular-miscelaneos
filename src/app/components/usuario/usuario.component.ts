import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
})
export class UsuarioComponent implements OnInit {

  constructor(private _router: ActivatedRoute) {
    this._router.params.subscribe(res => console.log("ID en ruta padre --> ",res.id));
  }

  ngOnInit(): void {
  }

}
