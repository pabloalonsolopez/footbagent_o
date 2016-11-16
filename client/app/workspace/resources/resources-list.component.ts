import { Component, OnInit } from '@angular/core'

import { Resource } from './resource.model'
import { ResourcesService } from './resources.service'

@Component({
  moduleId: module.id,
  selector: 'st-resources-list',
  templateUrl: 'resources-list.component.html'
})

export class ResourcesListComponent implements OnInit {
  
  resources: Resource[]
  error: any
  
  constructor(private resourcesService: ResourcesService) {}

  ngOnInit(): void {
    this.resourcesService.getResources()
      .subscribe(
        resources => this.resources = resources,
        error => this.error = error
      )
  }

}