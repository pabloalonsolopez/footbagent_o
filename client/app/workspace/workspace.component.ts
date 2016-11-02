import { Component } from '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'fb-workspace',
  templateUrl: 'workspace.component.html',
  host: {
  	class: 'flex(expand) d(flex) fd(column)'
  }
})

export class WorkspaceComponent { }