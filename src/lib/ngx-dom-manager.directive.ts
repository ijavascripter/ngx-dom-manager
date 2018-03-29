import {Directive, ElementRef, ViewContainerRef} from '@angular/core';
import {ViewRef} from "@angular/core/src/linker/view_ref";

/**
 * Main directive class of ngx-dom-manager.
 * Directive methods can be called from outside declaring reference to this directive host:
 * @ViewChild(NgxDomManagerDirective) ngxDomManager:NgxDomManagerDirective
 */
@Directive({
  selector: '[ngxDomManager]',
  host: {
    '(appendToRoot)':"appendToRoot($viewRef)"
  }
})
export class NgxDomManagerDirective {

  /**
   * Class constructor. Injection of dependencies.
   * @param {ViewContainerRef} viewContainerRef
   */
  constructor(protected el:ElementRef) { }

  /**
   * Appends an element into the root element of the container
   * @param {ViewRef} viewRef The element to append
   */
  appendToRoot(viewRef: ViewRef) {
    this.el.nativeElement.appendChild(viewRef);
  }

  /**
   * Appends an element into the selected element of the container
   * @param {string} targetElementClass The class name of the element into wichc the new element will be appended
   * @param {ViewRef} viewRef The element to append
   */
  appendTo(targetElementClass: string, viewRef: ViewRef) {
    // TODO: Implement
  }
}
