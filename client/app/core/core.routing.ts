import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'
import { ResetPasswordComponent } from './reset-password/reset-password.component'
import { ResetPasswordConfirmComponent } from './reset-password-confirm/reset-password-confirm.component'
import { PrivacyComponent } from './privacy/privacy.component'
import { TermsComponent } from './terms/terms.component'

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  {
    path: 'reset-password-confirm',
    component: ResetPasswordConfirmComponent
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  }
]

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes)