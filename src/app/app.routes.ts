import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Component, OnInit } from '@angular/core';
import  { UsuarioComponent } from './components/usuario/usuario.component';
import { USER_ROUTES } from './components/usuario/usuario.routes';
@Component({
	selector: 'selector-name',
	template: ``
}) 

export class NameComponent implements OnInit {
	constructor() { }

	ngOnInit() { }
}

const APP_ROUTES: Routes = [
	{ path: 'home', component: HomeComponent },
	{ 
		path: 'usuario/:id', 
		component: UsuarioComponent,
		children: USER_ROUTES
	},
	{ path: '**', pathMatch: 'full', redirectTo: 'home' },
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);