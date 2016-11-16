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
<<<<<<< HEAD
    this.resourcesService.getResources()
=======
    this.resources = new Array<Resource>()
    this.getTodos()
  }

  getTodos(): void {
    this.resourceService.getResources()
>>>>>>> e4cefb876dc6aa156677e7a1a8d9ffbc0d1c3dc7
      .subscribe(
        resources => this.resources = resources,
        error => this.error = error
      )
  }

}