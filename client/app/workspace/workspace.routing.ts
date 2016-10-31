import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { WorkspaceComponent } from './workspace.component'
import { SettingsComponent } from './settings/settings.component'
import { AgendaComponent } from './agenda/agenda.component'
import { ResourcesListComponent } from './resources/resources-list.component'
import { ResourceNewComponent } from './resources/resource-new.component'
import { ResourceDetailComponent } from './resources/resource-detail.component'

const routes: Routes = [
  {
    path: 'workspace',
    redirectTo: 'workspace/agenda',
    pathMatch: 'full',
  },
  {
    path: 'workspace',
    component: WorkspaceComponent,
    children: [
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'agenda',
        component: AgendaComponent
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
        component: ResourceDetailComponent
      }
    ]
  }
]

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes)