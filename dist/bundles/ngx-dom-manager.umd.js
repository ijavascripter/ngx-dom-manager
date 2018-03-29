(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
    (factory((global.ng = global.ng || {}, global.ng['ngx-dom-manager'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * Main directive class of ngx-dom-manager.
     * Directive methods can be called from outside declaring reference to this directive host:
     * @ViewChild(NgxDomManagerDirective) ngxDomManager:NgxDomManagerDirective
     */
    var NgxDomManagerDirective = /** @class */ (function () {
        /**
         * Class constructor. Injection of dependencies.
         * @param {ViewContainerRef} viewContainerRef
         */
        function NgxDomManagerDirective(el) {
            this.el = el;
        }
        /**
         * Appends an element into the root element of the container
         * @param {ViewRef} viewRef The element to append
         */
        /**
           * Appends an element into the root element of the container
           * @param {ViewRef} viewRef The element to append
           */
        NgxDomManagerDirective.prototype.appendToRoot = /**
           * Appends an element into the root element of the container
           * @param {ViewRef} viewRef The element to append
           */
        function (viewRef) {
            this.el.nativeElement.appendChild(viewRef);
        };
        /**
         * Appends an element into the selected element of the container
         * @param {string} targetElementClass The class name of the element into wichc the new element will be appended
         * @param {ViewRef} viewRef The element to append
         */
        /**
           * Appends an element into the selected element of the container
           * @param {string} targetElementClass The class name of the element into wichc the new element will be appended
           * @param {ViewRef} viewRef The element to append
           */
        NgxDomManagerDirective.prototype.appendTo = /**
           * Appends an element into the selected element of the container
           * @param {string} targetElementClass The class name of the element into wichc the new element will be appended
           * @param {ViewRef} viewRef The element to append
           */
        function (targetElementClass, viewRef) {
            // TODO: Implement
        };
        NgxDomManagerDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[ngxDomManager]',
                        host: {
                            '(appendToRoot)': "appendToRoot($viewRef)"
                        }
                    },] },
        ];
        /** @nocollapse */
        NgxDomManagerDirective.ctorParameters = function () { return [
            { type: core.ElementRef, },
        ]; };
        return NgxDomManagerDirective;
    }());

    var NgxDomManagerModule = /** @class */ (function () {
        function NgxDomManagerModule() {
        }
        NgxDomManagerModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            NgxDomManagerDirective
                        ],
                        exports: [NgxDomManagerDirective]
                    },] },
        ];
        /** @nocollapse */
        NgxDomManagerModule.ctorParameters = function () { return []; };
        return NgxDomManagerModule;
    }());

    exports.NgxDomManagerModule = NgxDomManagerModule;
    exports.NgxDomManagerDirective = NgxDomManagerDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
