export default {
  input: 'dist/src/index.js',
  sourceMap: false,
  output: {
    format: 'umd',
    file: 'dist/bundles/ngx-dom-manager.umd.js',
    name: 'ng.ngx-dom-manager',
    globals: {
      '@angular/core': 'ng.core',
      'rxjs/Observable': 'Rx',
      'rxjs/ReplaySubject': 'Rx',
      'rxjs/add/operator/map': 'Rx.Observable.prototype',
      'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
      'rxjs/add/observable/fromEvent': 'Rx.Observable',
      'rxjs/add/observable/of': 'Rx.Observable'
    }
  }
}
