import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { CoreModule } from './core/core.module'
import { SharedModule } from './shared/shared.module'
import { WorkspaceModule } from './workspace/workspace.module'

import { RoutingModule } from './app.routing'

import { AppComponent } from './app.component'

@NgModule({
  imports: [
  	BrowserModule,
    CoreModule,
    SharedModule,
    WorkspaceModule,
    RoutingModule
  ],
  declarations: [
  	AppComponent
  ],
  bootstrap: [
  	AppComponent
  ]
})

export class AppModule { }