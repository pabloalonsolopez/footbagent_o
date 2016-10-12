(function (global) {
  System.config({
    paths: {
      // @if NODE_ENV='development'
      'path:': 'assets/js/vendor/'
      // @endif
      // @if NODE_ENV='production'
      'path:': 'node_modules/'
      // @endif
    },
    map: {
      // @if NODE_ENV='development'
      app: 'app',
      // @endif
      // @if NODE_ENV='production'
      app: 'dist/public/app',
      // @endif
      '@angular/core': 'path:@angular/core/bundles/core.umd.js',
      '@angular/common': 'path:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'path:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'path:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'path:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'path:@angular/http/bundles/http.umd.js',
      '@angular/router': 'path:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'path:@angular/forms/bundles/forms.umd.js',
      'rxjs': 'path:rxjs',
      'angular-in-memory-web-api': 'path:angular-in-memory-web-api'
    },
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }// @if NODE_ENV='production'
    ,
    bundles: {
      'assets/js/main.min.js': [
        'dist/public/app/main.js',
        '@angular/**/*.js',
        'rxjs/**/*.js',
        'angular-in-memory-web-api/**/*.js'
      ]
    }
    // @endif
  })
})(this)