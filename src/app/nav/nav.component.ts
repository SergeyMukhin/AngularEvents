import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventsService, IEvent } from '../events';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav.component.html',
    styleUrls: [ './nav.component.css' ]
})
export class NavComponent implements OnInit {
    searchTerm: string = "";
    foundSessions: ISession[] = [];
    events: IEvent[];

    constructor(private eventsService: EventsService,
                private authService: AuthService) { }

    ngOnInit() {
        this.eventsService.getEvents().subscribe(data => this.events = data);
        this.eventsService.eventsUpdated.subscribe(() => {
            this.eventsService.getEvents().subscribe(data => this.events = data);
        })
    }

    searchSessions(searchTerm) {
        this.eventsService.searchSessions(searchTerm).subscribe(sessions => { this.foundSessions = sessions; } );
    }
}