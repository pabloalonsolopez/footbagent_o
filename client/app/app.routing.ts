import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'workspace',
    loadChildren: 'app/workspace/workspace.module#WorkspaceModule'
  }
]

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(routes)