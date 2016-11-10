import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { Resource } from './resource'
import { ResourceService } from './resource.service'

@Component({
  moduleId: module.id,
  selector: 'fb-resource-new',
  templateUrl: 'resource-new.component.html'
})

export class ResourceNewComponent implements OnInit {
  
  resourceForm: FormGroup
  resource: Resource
  errorMessage: any

  formErrors: any = {
    'name': ''
  }
  validationMessages: any = {
    'name': {
      'required': 'Name is required.'
    }
  }
  

  constructor(private fb: FormBuilder, private router: Router, private resourceService: ResourceService) { }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm(): void {
    this.resourceForm = this.fb.group({
      'avatar': [''],
      'name': [''],
      'knownAs': [''],
      'dateOfBirth': [''],
      'cityOfBirth': [''],
      'stateOfBirth': [''],
      'countryOfBirth': [''],
      'maritalStatus': [''],
      'children': [0],
      'height': [0],
      'weight': [0],
      'preferredFoot': [''],
      'mainPosition': this.initPosition(),
      'otherPositions': this.fb.array([
        this.initPosition()
       ]),
      'phone': [''],
      'email': [''],
      'website': [''],
      'twitter': [''],
      'facebook': [''],
      'instagram': [''],
      'languages': this.fb.array([
        this.initLanguage()
      ]),
      'summary': ['']
    })
    this.resourceForm.valueChanges.subscribe(
      data => this.onValueChanged(data)
    )
  }

  submit(): void {
    this.resourceService.create(this.resourceForm.value)
  	  .subscribe(
        resource => this.router.navigate(['/workspace/resources', resource._id]),
        error => this.errorMessage = <any>error
  	  )
  }

  onValueChanged(data?: any): void {
    if (!this.resourceForm) { return }
    for (const field in this.formErrors) {
      this.formErrors[field] = ''
      const control = this.resourceForm.get(field)
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field]
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' '
        }
      }
    }
  }
  
  initPosition(): FormGroup {
    return this.fb.group({
      'name': ['']
    })
  }

  addPosition(): void {
    (<FormArray>(this.resourceForm.controls['otherPositions'])).push(this.initPosition())
  }
  
  removePosition(i: number): void {
    (<FormArray>(this.resourceForm.controls['otherPositions'])).removeAt(i)
  }

  initLanguage(): FormGroup {
    return this.fb.group({
      'name': [''],
      'level': [0]
    })
  }

  addLanguage(): void {
    (<FormArray>(this.resourceForm.controls['languages'])).push(this.initLanguage())
  }

  removeLanguage(i: number): void {
    (<FormArray>(this.resourceForm.controls['languages'])).removeAt(i)
  }

}