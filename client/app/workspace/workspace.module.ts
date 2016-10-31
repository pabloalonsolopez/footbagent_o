import { NgModule } from '@angular/core'

import { SharedModule } from '../shared/shared.module'

import { RoutingModule } from './workspace.routing'

import { WorkspaceComponent } from './workspace.component'
import { SettingsComponent } from './settings/settings.component'
import { AgendaComponent } from './agenda/agenda.component'
import { ResourcesListComponent } from './resources/resources-list.component'
import { ResourceNewComponent } from './resources/resource-new.component'
import { ResourceDetailComponent } from './resources/resource-detail.component'

import { ResourceService } from './resources/resource.service'

@NgModule({
  imports: [
    SharedModule,
    RoutingModule
  ],
  declarations: [
    WorkspaceComponent,
    SettingsComponent,
    AgendaComponent,
    ResourcesListComponent,
    ResourceNewComponent,
    ResourceDetailComponent
  ],
  providers: [
    ResourceService
  ]
})

export class WorkspaceModule { }