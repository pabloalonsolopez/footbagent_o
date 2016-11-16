import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ActivitiesComponent } from './activities.component'

const routes: Routes = [
  {
    path: '',
    component: ActivitiesComponent
  }
]

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes)