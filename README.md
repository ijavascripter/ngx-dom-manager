# NgxDomManager

This is a directive that allows to manage the dom of the element in which is included. 

This will provide methods that can be called on the outside context to manage the DOM of the element. 

The directive is in an early stage and more methods will be added. Contributors are welcome since it is an open source project.

## Installation

    npm install ngx-dom-manager
    
## Usage

Simply include the directive and the parent component will have access to its methods.
```html
<div ngxDomManager></div>
```

```typescript
import {Component, ElementRef, ViewChild} from '@angular/core';
import { NgxDomManagerDirective } from '../../node_modules/ngx-dom-manager/src/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /** Reference to directive API methods */
  @ViewChild(NgxDomManagerDirective) ngxDomManager:NgxDomManagerDirective;

  constructor(private el:ElementRef) { }

  /**
   * On click test append button
   */
  onClickAppendButton() {
    let elementToAppend = this.el.nativeElement.querySelector(".test-source-element");
    console.debug("Test button", elementToAppend);
    this.ngxDomManager.appendToRoot(elementToAppend);
  }
}
```

## Directive API methods

* appendToRoot(viewRef: ViewRef): This will append an element to the end of the component container

