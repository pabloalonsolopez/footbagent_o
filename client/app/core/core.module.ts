import { NgModule } from '@angular/core'

import { SharedModule } from '../shared/shared.module'

import { RoutingModule } from './core.routing'

import { HomeComponent } from './home/home.component'

@NgModule({
  imports: [
    SharedModule,
    RoutingModule
  ],
  declarations: [
<<<<<<< HEAD
    HomeComponent
=======
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent,
    ResetPasswordConfirmComponent,
    TermsComponent,
    PrivacyComponent,
    CookiesComponent
>>>>>>> e4cefb876dc6aa156677e7a1a8d9ffbc0d1c3dc7
  ],
  exports: [
    HomeComponent
  ]
})

export class CoreModule { }