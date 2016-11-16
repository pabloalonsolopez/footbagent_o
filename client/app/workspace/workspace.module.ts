import { NgModule } from '@angular/core'

import { SharedModule } from '../shared/shared.module'

import { RoutingModule } from './workspace.routing'

import { WorkspaceComponent } from './workspace.component'
<<<<<<< HEAD
=======
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
>>>>>>> e4cefb876dc6aa156677e7a1a8d9ffbc0d1c3dc7

@NgModule({
  imports: [
    SharedModule,
    RoutingModule
  ],
  declarations: [
<<<<<<< HEAD
    WorkspaceComponent
=======
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
>>>>>>> e4cefb876dc6aa156677e7a1a8d9ffbc0d1c3dc7
  ]
})

export class WorkspaceModule { }