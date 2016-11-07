import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { DropdownDirective } from './dropdown/dropdown.directive'
import { DropdownOpenDirective } from './dropdown/dropdown-open.directive'
import { FPipe } from './pipes/f.pipe'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    DropdownDirective,
    DropdownOpenDirective,
    FPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    DropdownDirective,
    DropdownOpenDirective,
    FPipe
  ]
})

export class SharedModule { }