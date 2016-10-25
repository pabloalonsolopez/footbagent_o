import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { WorkspaceComponent } from './workspace.component'
import { AgendaComponent } from './agenda/agenda.component'
import { SettingsComponent } from './settings/settings.component'

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
        path: 'agenda',
        component: AgendaComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      }
    ]
  }
]

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes)