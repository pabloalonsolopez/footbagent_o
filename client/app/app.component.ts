import { Component } from '@angular/core'

import './rxjs-operators'

@Component({
  moduleId: module.id,
  selector: 'fb-app',
  templateUrl: 'app.component.html',
  host: {
  	class: 'd(flex) fd(column) h(100vh) lh(1.5) ff(proxima) fw(400) f(1.4rem) c(black)'
  }
})

export class AppComponent { }