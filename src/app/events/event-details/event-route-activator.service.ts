import { Injectable } from '@angular/core';
import { EventsService } from '../shared/events.service';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class EventRouteActivator implements CanActivate{
    constructor(private eventsService: EventsService,
                private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot) {
        let id = +route.params['id'];
        let eventExists = !!this.eventsService.getEvent(id);

        if (!eventExists) {
            this.router.navigate(['/404']);
        }
        return eventExists;
     }
}