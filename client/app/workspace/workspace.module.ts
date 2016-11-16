import { NgModule } from '@angular/core'

import { SharedModule } from '../shared/shared.module'

import { RoutingModule } from './workspace.routing'

import { WorkspaceComponent } from './workspace.component'

@NgModule({
  imports: [
    SharedModule,
    RoutingModule
  ],
  declarations: [
    WorkspaceComponent
  ]
})

export class WorkspaceModule { }