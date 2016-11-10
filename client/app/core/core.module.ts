import { NgModule } from '@angular/core'

import { SharedModule } from '../shared/shared.module'

import { RoutingModule } from './core.routing'

import { HeaderComponent } from './header/header.component'
import { MainContentComponent } from './main-content/main-content.component'
import { FooterComponent } from './footer/footer.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'
import { ResetPasswordComponent } from './reset-password/reset-password.component'
import { ResetPasswordConfirmComponent } from './reset-password-confirm/reset-password-confirm.component'
import { TermsComponent } from './terms/terms.component'
import { PrivacyComponent } from './privacy/privacy.component'
import { CookiesComponent } from './cookies/cookies.component'

@NgModule({
  imports: [
    SharedModule,
    RoutingModule
  ],
  declarations: [
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
  ],
  exports: [
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
  ]
})

export class CoreModule { }