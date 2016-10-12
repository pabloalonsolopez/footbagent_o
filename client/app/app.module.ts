import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { SharedModule } from './shared/shared.module'
import { HomeModule } from './home/home.module'

import { routing } from './app.routing'

import { AppComponent } from './app.component'

@NgModule({
  imports: [
  	BrowserModule,
    SharedModule,
  	HomeModule,
    routing
  ],
  declarations: [
  	AppComponent
  ],
  bootstrap: [
  	AppComponent
  ]
})

export class AppModule { }