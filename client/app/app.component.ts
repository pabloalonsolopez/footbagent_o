import { Component } from '@angular/core'

import './rxjs-operators'

@Component({
  moduleId: module.id,
  selector: 'fb-app',
  templateUrl: 'app.component.html',
  host: {
  	class: 'd(flex) fd(column) minh(100%)' 
  }
})

export class AppComponent { }