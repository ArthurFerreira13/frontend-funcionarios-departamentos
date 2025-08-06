import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInputColor]',
  exportAs: 'inputColorido'
})
export class InputColorDirective {
 @Input() corUsuario: string = 'gray';

  @HostBinding('style.backgroundColor') cor: string = '';

  @HostListener('focus') comFoco() {
      this.cor = this.corUsuario
     }
     @HostListener('blur') semFoco() {
      this.cor = 'transparent';
     }

}
