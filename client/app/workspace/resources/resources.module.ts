import { NgModule } from '@angular/core'

import { SharedModule } from '../../shared/shared.module'

import { RoutingModule } from './resources.routing'

import { ResourcesComponent } from './resources.component'
import { ResourcesListComponent } from './resources-list.component'
import { ResourceNewComponent } from './resource-new.component'
import { ResourceComponent } from './resource.component'
import { ResourceDetailComponent } from './resource-detail.component'
import { ResourceEditComponent } from './resource-edit.component'
import { ResourceFormComponent } from './resource-form.component'
import { ResourceActivitiesComponent } from './resource-activities.component'

import { ResourcesService } from './resources.service'

@NgModule({
  imports: [
    SharedModule,
    RoutingModule
  ],
  declarations: [
    ResourcesComponent,
    ResourcesListComponent,
    ResourceNewComponent,
    ResourceComponent,
    ResourceDetailComponent,
    ResourceEditComponent,
    ResourceFormComponent,
    ResourceActivitiesComponent
  ],
  providers: [
    ResourcesService
  ]
})

export class ResourcesModule { }