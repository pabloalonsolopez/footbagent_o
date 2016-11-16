import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ResourcesComponent } from './resources.component'
import { ResourceNewComponent } from './resource-new.component'
import { ResourcesListComponent } from './resources-list.component'
import { ResourceComponent } from './resource.component'
import { ResourceDetailComponent } from './resource-detail.component'
import { ResourceActivitiesComponent } from './resource-activities.component'

const routes: Routes = [
  {
    path: '',
    component: ResourcesComponent,
    children: [
      {
        path: '',
        component: ResourcesListComponent
      },
      {
        path: 'new',
        component: ResourceNewComponent
      },
      {
        path: ':id',
        redirectTo: ':id/profile',
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: ResourceComponent,
        children: [
          {
            path: 'profile',
            component: ResourceDetailComponent
          },
          {
            path: 'activity',
            component: ResourceActivitiesComponent
          }
        ]
      }
    ]
  }
]

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes)