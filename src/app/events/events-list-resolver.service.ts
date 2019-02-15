import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { EventsService } from './shared/events.service';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class EventsListResolver implements Resolve<any> {
    constructor(private eventsService: EventsService) { }
    resolve() {
        return this.eventsService.getEvents().pipe(map(events => events));
    }
}