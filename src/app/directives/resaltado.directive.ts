import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input() appResaltado: string = '';

  constructor(private _elementRef: ElementRef) {
    console.log('directiva llamada');
  }
  
  @HostListener('mouseenter') efectoMouseEnter() {
    this.resaltar(this.appResaltado);
  }

  @HostListener('mouseleave') efectoMouseLeave() {
    this._elementRef.nativeElement.style.backgroundColor = null;
  }
  
  private resaltar(color: string) {
    this._elementRef.nativeElement.style.backgroundColor = color;
  }

}
