import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

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
>>>>>>> e4cefb876dc6aa156677e7a1a8d9ffbc0d1c3dc7

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
<<<<<<< HEAD
      	path: 'activity',
        loadChildren: 'app/workspace/activities/activities.module#ActivitiesModule'
=======
        path: 'profile',
        component: ProfileComponent,
        children: [
          {
            path: 'detail',
            component: ProfileDetailComponent
          },
          {
            path: 'password',
            component: ProfilePasswordComponent
          },
          {
            path: 'deactivation',
            component: ProfileDeactivationComponent
          }
        ]
      },
      {
        path: 'resources',
        component: ResourcesListComponent
      },
      {
        path: 'resources/new',
        component: ResourceNewComponent
      },
      {
        path: 'resources/:id',
        redirectTo: 'resources/:id/details',
        pathMatch: 'full',
      },
      {
        path: 'resources/:id',
        component: ResourceDetailComponent,
        children: [
          {
            path: 'details',
            component:ResourceDetailComponent
          },
          {
            path: 'activity',
            component: ResourceActivityComponent
          }
        ]
      },
      {
        path: 'activity',
        component: ActivityListComponent
>>>>>>> e4cefb876dc6aa156677e7a1a8d9ffbc0d1c3dc7
      }
    ]
  }
]

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes)