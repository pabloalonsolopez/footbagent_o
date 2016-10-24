import { Component } from '@angular/core'
import { Router, Event, NavigationEnd } from '@angular/router'

@Component({
  moduleId: module.id,
  selector: 'fb-header',
  templateUrl: 'header.component.html',
  host: {
    class: 'flex(0)'
  }
})

export class HeaderComponent {
  
  visible: boolean
  hiddenRoutes: string[] = ['/login', '/signup', '/reset-password', '/reset-password-confirm']

  constructor(private router: Router) {
    this.router.events
      .filter((event: Event) => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => this.visible = !this.hiddenRoutes.includes(event.urlAfterRedirects))
  }

}