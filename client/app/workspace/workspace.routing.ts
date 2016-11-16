import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { WorkspaceComponent } from './workspace.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'resources',
    pathMatch: 'full'
  },
  {
    path: '',
    component: WorkspaceComponent,
    children: [
      {
      	path: 'resources',
        loadChildren: 'app/workspace/resources/resources.module#ResourcesModule'
      },
      {
      	path: 'activity',
        loadChildren: 'app/workspace/activities/activities.module#ActivitiesModule'
      }
    ]
  }
]

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes)