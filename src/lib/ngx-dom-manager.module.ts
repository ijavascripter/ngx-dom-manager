import { NgModule } from '@angular/core';
import {NgxDomManagerDirective} from './ngx-dom-manager.directive';
@NgModule({
  declarations: [
    NgxDomManagerDirective
  ],
  exports: [NgxDomManagerDirective]
})
export class NgxDomManagerModule {}
