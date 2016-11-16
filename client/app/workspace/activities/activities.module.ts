import { NgModule } from '@angular/core'

import { SharedModule } from '../../shared/shared.module'

import { RoutingModule } from './activities.routing'

import { ActivitiesComponent } from './activities.component'

@NgModule({
  imports: [
    SharedModule,
    RoutingModule
  ],
  declarations: [
    ActivitiesComponent
  ]
})

export class ActivitiesModule { }