import { Injectable } from '@angular/core'
import { RequestOptions, Headers, Http, Response } from '@angular/http'

import { Observable } from "rxjs/Observable"

import { Resource } from './resource.model'

@Injectable()
export class ResourcesService {
  
  private resourcesUrl = 'api/resources'
  private options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) })

  constructor(private http: Http) {}

  getResources(): Observable<Resource[]> {
    return this.http.get(this.resourcesUrl)
      .map(this.extractData)
      .catch(this.handleError)
  }
  
  getResource(id: string): Observable<Resource> {
    return this.http.get(`${this.resourcesUrl}${id}`)
      .map(this.extractData)
      .catch(this.handleError)
  }

  createResource(resource: Resource): Observable<Resource> {
    return this.http.post(this.resourcesUrl, JSON.stringify(resource), this.options)
      .map(this.extractData)
      .catch(this.handleError)
  }

  updateResource(resource: Resource): Observable<Resource> {
    return this.http.put(`${this.resourcesUrl}${resource._id}`, JSON.stringify(resource), this.options)
      .map(this.extractData)
      .catch(this.handleError)
  }

  deleteResource(resource: Resource): Observable<Resource> {
    return this.http.delete(`${this.resourcesUrl}${resource._id}`)
      .map(this.extractData)
      .catch(this.handleError)
  }

  private extractData(response: Response): Observable<any> {
    return response.json() || {}
  }

  private handleError(error: any): Observable<any> {
    const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error'
    return Observable.throw(errMsg)
  }
  
}