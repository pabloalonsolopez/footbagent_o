import { Component } from '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'fb-main-content',
  templateUrl: 'main-content.component.html',
  host: {
  	class: 'flex(1) d(flex) fd(column)'
  }
})

export class MainContentComponent { }