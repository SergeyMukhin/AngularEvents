import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEvent, EventsService, ISession } from '../shared/index';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right:20px; }
        .event-image { height: 100px; }
        a {cursor: pointer}
        `
    ]
})
export class EventDetailsComponent implements OnInit {
    addMode = false;
    event: IEvent;
    filterBy = 'all';
    sortBy = 'votes';

    constructor(private eventsService: EventsService,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.data.forEach(data => {
            this.event = data.event;
            this.addMode = false;
        });
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        session.id = Math.max(...this.event.sessions.map(s => s.id)) + 1;
        this.event.sessions.push(session);
        this.eventsService.saveEvent(this.event).subscribe(() => {
            this.addMode = false;
        });
    }

    cancelAddSession() {
        this.addMode = false;
    }
}
