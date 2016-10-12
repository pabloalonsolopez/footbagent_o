import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule
  ]
})

export class SharedModule { }