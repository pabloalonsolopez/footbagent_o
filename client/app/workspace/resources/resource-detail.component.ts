import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router, Params } from '@angular/router'

import { Resource } from './resource'
import { ResourceService } from './resource.service'

@Component({
  moduleId: module.id,
  selector: 'st-resource-detail',
  templateUrl: 'resource-detail.component.html'
})

export class ResourceDetailComponent implements OnInit {
	
  resource: Resource
  errorMessage: any
	
  constructor(private route: ActivatedRoute, private router: Router, private resourceService: ResourceService) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = params['id']
      this.resourceService.getResource(id)
        .subscribe(
          resource => this.resource = resource,
          error => this.errorMessage = <any>error
        )
    })
  }

  delete(): void {
    this.resourceService.delete(this.resource)
      .subscribe(
        () => this.router.navigate(['/workspace/resources'])
      )
  }

}