import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <app-css></app-css>

  <app-clases></app-clases>

  <h2 [appResaltado]="'orange'" >
    Hola Mundo!
  </h2>
   
  <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements
OnInit,
OnChanges, 
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
  {

  constructor() { 
    console.log("constructor");
  }

  ngOnInit(): void {
    console.log("OnInit");
  }


  ngOnChanges(): void {
    console.log("OnChanges");
  }


  ngDoCheck(): void {
    console.log("DoCheck");
  }


  ngAfterContentInit(): void {
    console.log("AfterContentInit");
  }


  ngAfterContentChecked(): void {
    console.log("AfterContentChecked");
  }


  ngAfterViewInit(): void {
    console.log("AfterViewInit");
  }


  ngAfterViewChecked(): void {
    console.log("AfterViewChecked");
  }


  ngOnDestroy(): void {
    console.log("OnDestroy");
  }




}
