import { Directive, ViewContainerRef } from '@angular/core';
 
@Directive({
  selector: '[dynamicComponentHost]'
})
export class DynamicChildLoaderDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}