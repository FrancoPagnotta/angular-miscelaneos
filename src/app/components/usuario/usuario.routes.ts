import { Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { UsuarioEditarComponent } from './usuario-editar.component';
import { UsuarioDetalleComponent } from './usuario-detalle.component';

export const USER_ROUTES: Routes = [
	// { path: 'home', component: HomeComponent },
	{ path: 'nuevo', component: UsuarioNuevoComponent },
	{ path: 'editar', component: UsuarioEditarComponent },
	{ path: 'detalle', component: UsuarioDetalleComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'nuevo' },
]
