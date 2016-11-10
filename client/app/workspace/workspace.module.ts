import { NgModule } from '@angular/core'

import { SharedModule } from '../shared/shared.module'

import { RoutingModule } from './workspace.routing'

import { WorkspaceComponent } from './workspace.component'
import { ProfileComponent } from './profile/profile.component'
import { ProfileDetailComponent } from './profile/profile-detail.component'
import { ProfilePasswordComponent } from './profile/profile-password.component'
import { ProfileDeactivationComponent } from './profile/profile-deactivation.component'
import { AgendaComponent } from './agenda/agenda.component'
import { ResourcesListComponent } from './resources/resources-list.component'
import { ResourceNewComponent } from './resources/resource-new.component'
import { ResourceDetailComponent } from './resources/resource-detail.component'
import { ActivityListComponent } from './activities/activity-list.component'

import { ResourceService } from './resources/resource.service'

@NgModule({
  imports: [
    SharedModule,
    RoutingModule
  ],
  declarations: [
    WorkspaceComponent,
    ProfileComponent,
    ProfileDetailComponent,
    ProfilePasswordComponent,
    ProfileDeactivationComponent,
    AgendaComponent,
    ResourcesListComponent,
    ResourceNewComponent,
    ResourceDetailComponent,
    ActivityListComponent
  ],
  providers: [
    ResourceService
  ]
})

export class WorkspaceModule { }