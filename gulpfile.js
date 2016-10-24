var gulp = require('gulp')
var typings = require("gulp-typings")
var del = require('del')
var sequence = require('gulp-sequence')
var ts = require('gulp-typescript')
var sourcemaps = require('gulp-sourcemaps')
var inlineNg2Template = require('gulp-inline-ng2-template')
var uglify = require('gulp-uglify')
var systembuilder = require('systemjs-builder')
var sass = require('gulp-sass')
var concat = require('gulp-concat')
var autoprefixer = require('gulp-autoprefixer')
var cleancss = require('gulp-clean-css')
var preprocess = require('gulp-preprocess')
var nodemon = require('gulp-nodemon')
var browsersync = require('browser-sync').create()
var watch = require('gulp-watch')
var cache = require('gulp-cached')
var spawn = require('child_process').spawn

gulp.task('typings', function() {
  return gulp.src(['server/typings.json', 'client/typings.json'])
    .pipe(typings())
})

gulp.task('clean', function() {
  return del('dist')
})

gulp.task('build', function(cb) {
  sequence(['build:server', 'build:client'])(cb)
})

gulp.task('build:server:client:prod', function(cb) {
  sequence(['build:server:prod', 'build:client:prod'])(cb)
})

  gulp.task('build:server', function(cb) {
    sequence(['copy:static:server', 'compile:ts:server'])(cb)
  })

  gulp.task('build:server:prod', function(cb) {
    sequence(['copy:static:server', 'compile:ts:server:prod'])(cb)
  })

    gulp.task('copy:static:server', function() {
      return gulp.src(['server/bin/www', 'server/env.json'], { base: 'server' })
        .pipe(gulp.dest('dist'))
    })

    gulp.task('compile:ts:server', function() {
      var tsProject = ts.createProject('server/tsconfig.json')
      var tsResult = gulp.src('server/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject())
      return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))
    })

    gulp.task('compile:ts:server:prod', function() {
      var tsProject = ts.createProject('server/tsconfig.json')
      var tsResult = gulp.src('server/**/*.ts')
        .pipe(tsProject())
      return tsResult.js
        .pipe(gulp.dest('dist'))
    })

  gulp.task('build:client', function(cb) {
    sequence(['build:resources:client', 'build:app:client'])(cb)
  })

  gulp.task('build:client:prod', function(cb) {
    sequence(['build:resources:client:prod', 'build:app:client:prod'])(cb)
  })

    gulp.task('build:resources:client', function(cb) {
      sequence(['copy:assets:client', 'copy:static:client', 'compile:styles:client', 'bundle:vendor:client', 'copy:systemjs-vendor:client', 'preprocess:systemjs:client'])(cb)
    })

    gulp.task('build:resources:client:prod', function(cb) {
      sequence(['copy:assets:client', 'copy:static:client', 'compile:styles:client', 'bundle:vendor:client:prod'])(cb)
    })

      gulp.task('copy:assets:client', function() {
        return gulp.src(['client/assets/fonts/**/*', 'client/assets/images/**/*'], { base: 'client' })
          .pipe(cache())
          .pipe(gulp.dest('dist/public'))
          .pipe(browsersync.stream())
      })

      gulp.task('copy:static:client', function() {
        return gulp.src(['client/favicon.ico', 'client/index.html'], { base: 'client' })
          .pipe(gulp.dest('dist/public'))
      })

      gulp.task('compile:styles:client', function() {
        return gulp.src('client/assets/styles/styles.scss')
          .pipe(concat('styles.min.css'))
          .pipe(sass().on('error', sass.logError))
          .pipe(autoprefixer())
          //.pipe(cleancss())
          .pipe(gulp.dest('dist/public/assets/styles'))
          .pipe(browsersync.stream())
      })

      gulp.task('bundle:vendor:client', function() {
        var vendor = [
          'node_modules/core-js/client/shim.min.js',
          'node_modules/zone.js/dist/zone.js',
          'node_modules/reflect-metadata/Reflect.js',
          'node_modules/systemjs/dist/system.src.js'
        ]
        return gulp.src(vendor)
          .pipe(sourcemaps.init())
          .pipe(concat('vendor.min.js'))
          .pipe(uglify())
          .pipe(sourcemaps.write('.'))
          .pipe(gulp.dest('dist/public/assets/js/vendor'))
      })

      gulp.task('bundle:vendor:client:prod', function() {
        var vendor = [
          'node_modules/core-js/client/shim.min.js',
          'node_modules/zone.js/dist/zone.js',
          'node_modules/reflect-metadata/Reflect.js',
          'node_modules/systemjs/dist/system.src.js'
        ]
        return gulp.src(vendor)
          .pipe(concat('vendor.min.js'))
          .pipe(uglify())
          .pipe(gulp.dest('dist/public/assets/js/vendor'))
      })

      gulp.task('copy:systemjs-vendor:client', function() {
        var vendor = [
          'node_modules/@angular/core/bundles/core.umd.js',
          'node_modules/@angular/common/bundles/common.umd.js',
          'node_modules/@angular/compiler/bundles/compiler.umd.js',
          'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
          'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
          'node_modules/@angular/http/bundles/http.umd.js',
          'node_modules/@angular/router/bundles/router.umd.js',
          'node_modules/@angular/forms/bundles/forms.umd.js',
          'node_modules/rxjs/**/*.js{,.map}',
          'node_modules/angular-in-memory-web-api/index.js'
        ]
        return gulp.src(vendor, { base : 'node_modules' })
          .pipe(gulp.dest('dist/public/assets/js/vendor'))
      })

      gulp.task('preprocess:systemjs:client', function() {
        return gulp.src('client/systemjs.config.js')
          .pipe(preprocess({ context: { NODE_ENV: 'development' } }))
          .pipe(gulp.dest('dist/public'))
      })

    gulp.task('build:app:client', function(cb) {
      sequence(['compile:ts:client', 'copy:html:client'])(cb)
    })

    gulp.task('build:app:client:prod', function(cb) {
      sequence(['compile:ts:client:prod', 'preprocess:systemjs:client:prod'], 'bundle:client:prod', 'clean:client:prod')(cb)
    })

      gulp.task('compile:ts:client', function() {
        var tsProject = ts.createProject('client/tsconfig.json')
        var tsResult = gulp.src('client/**/*.ts', { base: 'client' })
          .pipe(sourcemaps.init())
          .pipe(tsProject())
        return tsResult.js
          .pipe(sourcemaps.write('.'))
          .pipe(gulp.dest('dist/public'))
          .pipe(browsersync.stream())
      })

      gulp.task('compile:ts:client:prod', function() {
        var tsProject = ts.createProject('client/tsconfig.json')
        var tsResult = gulp.src('client/**/*.ts', { base: 'client' })
          .pipe(inlineNg2Template({ base: 'client/app', useRelativePaths: true }))
          .pipe(tsProject())
        return tsResult.js
          .pipe(gulp.dest('dist/public'))
          .pipe(browsersync.stream())
      })

      gulp.task('copy:html:client', function() {
        return gulp.src('client/app/**/*.html', { base: 'client' })
          .pipe(cache())
          .pipe(gulp.dest('dist/public'))
          .pipe(browsersync.stream())
      })

      gulp.task('preprocess:systemjs:client:prod', function() {
        return gulp.src('client/systemjs.config.js')
          .pipe(preprocess({ context: { NODE_ENV: 'production' } }))
          .pipe(gulp.dest('dist/public'))
      })
      
      gulp.task('bundle:client:prod', function(cb) {
        sequence(['bundle:main:client:prod', 'bundle:todos:client:prod'])(cb)
      })

        gulp.task('bundle:main:client:prod', function() {
          var builder = new systembuilder('', 'dist/public/systemjs.config.js')
          return builder.bundle('dist/public/app/main.js', 'dist/public/assets/js/main.min.js', { minify: true, mangle: false, sourceMaps: false })
        })

        gulp.task('bundle:todos:client:prod', function() {
          var builder = new systembuilder('', 'dist/public/systemjs.config.js')
          return builder.bundle('dist/public/app/todos/todos.module.js - dist/public/app/main.js', 'dist/public/assets/js/todos.min.js', { minify: true, mangle: false, sourceMaps: false })
        })

      gulp.task('clean:client:prod', function() {
        return del('dist/public/app')
      })

gulp.task('serve', function(cb) {
  sequence('serve:browser', ['serve:database', 'serve:server'])(cb)
})

gulp.task('serve:prod', function(cb) {
  sequence('serve:browser', ['serve:database', 'serve:server:prod'])(cb)
})
  
  gulp.task('serve:browser', function() {
    return browsersync.init({
      proxy: "localhost:3000",
      port: "5000"
    })
  })

  gulp.task('serve:database', function(cb) {
    spawn('mongod', ['--dbpath', './data'], { stdio: 'inherit' }).on('close', function(err) {
      cb(err)
    })
  })

  gulp.task('serve:server', function(cb) {
    var called = false
    return nodemon({
      script: 'dist/bin/www',
      ext: 'ts',
      watch: ['server'],
      tasks: ['compile:ts:server']
    }).on('start', function() {
      if (!called) {
        called = true
        cb()
      }
    }).on('restart', function() {
      setTimeout(function () {
        browsersync.reload()
      }, 1000)
    })
  })

  gulp.task('serve:server:prod', function(cb) {
    var env = Object.create(process.env)
    env.NODE_ENV = 'production'
    spawn('node', ['dist/bin/www'], { stdio: 'inherit', env: env }).on('close', function(err) {
      cb(err)
    })
  })

gulp.task('watch', function() {
  watch(['client/assets/fonts/**/*', 'client/assets/images/**/*'], function() {
    gulp.start('copy:assets:client')
  })
  watch('client/assets/styles/**/*.scss', function() {
    gulp.start('compile:styles:client')
  })
  watch('client/**/*.ts', function() {
    gulp.start('compile:ts:client')
  })
  watch('client/app/**/*.html', function() {
    gulp.start('copy:html:client')
  })
})

gulp.task('start:dev', function(cb) {
  sequence('clean', 'build', 'watch', 'serve')(cb)
})

gulp.task('build:prod', function(cb) {
  sequence('clean', 'build:server:client:prod')(cb)
})

gulp.task('start:prod', function(cb) {
  sequence('build:prod', 'serve:prod')(cb)
})

gulp.task('default', function(cb) {
  sequence('start:dev')(cb)
})