import { Injectable } from '@angular/core'
import { RequestOptions, Headers, Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable'

import { Resource } from './resource'

@Injectable()
export class ResourceService {
  
  private resourcesUrl = 'api/resources'
  private options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) })

  constructor(private http: Http) { }
  
  getResources(): Observable<Resource[]> {
    return this.http.get(this.resourcesUrl)
      .map(this.extractData)
      .catch(this.handleError)
  }
  
  getResource(id: string): Observable<Resource> {
    const url = `${this.resourcesUrl}/${id}`
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError)
  }
  
  create(todo: Resource): Observable<Resource>  {
    return this.http.post(this.resourcesUrl, JSON.stringify(todo), this.options)
      .map(this.extractData)
      .catch(this.handleError)
  }

  update(todo: Resource): Observable<Resource>  {
    const url = `${this.resourcesUrl}/${todo._id}`
    return this.http.put(url, JSON.stringify(todo), this.options)
      .map(this.extractData)
      .catch(this.handleError)
  }
  
  delete(todo: Resource): Observable<void> {
    const url = `${this.resourcesUrl}/${todo._id}`
    return this.http.delete(url, this.options)
      .map(this.extractData)
      .catch(this.handleError)
  }

  private extractData(response: Response): Observable<any> {
    return response.json().data || { }
  }

  private handleError(error: any): Observable<any> {
    const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error'
    console.error(errMsg)
    return Observable.throw(errMsg)
  }

}