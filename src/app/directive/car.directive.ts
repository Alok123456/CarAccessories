import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCar]'
})
export class CarDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
