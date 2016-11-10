import { Component, OnInit } from '@angular/core'

import { Resource } from './resource'
import { ResourceService } from './resource.service'

@Component({
  moduleId: module.id,
  selector: 'fb-resources-list',
  templateUrl: 'resources-list.component.html'
})

export class ResourcesListComponent implements OnInit {
  
  resources: Resource[]
  errorMessage: any

  constructor(private resourceService: ResourceService) { }

  ngOnInit(): void {
    this.resources = new Array<Resource>()
    this.getTodos()
  }

  getTodos(): void {
    this.resourceService.getResources()
      .subscribe(
        resources => this.resources = resources,
        error => this.errorMessage = <any>error
      )
  }

}