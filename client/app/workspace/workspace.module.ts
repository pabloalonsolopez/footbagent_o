import { NgModule } from '@angular/core'

import { SharedModule } from '../shared/shared.module'

import { RoutingModule } from './workspace.routing'

import { WorkspaceComponent } from './workspace.component'
import { AgendaComponent } from './agenda/agenda.component'
import { SettingsComponent } from './settings/settings.component'

@NgModule({
  imports: [
    SharedModule,
    RoutingModule
  ],
  declarations: [
    WorkspaceComponent,
    AgendaComponent,
    SettingsComponent
  ]
})

export class WorkspaceModule { }