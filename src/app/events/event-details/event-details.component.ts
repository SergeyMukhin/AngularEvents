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
    addMode: boolean = false;
    event: IEvent;
    filterBy: string = 'all';
    sortBy: string = 'votes';

    constructor(private eventsService: EventsService,
                private route: ActivatedRoute,
                private router: Router) { }

    ngOnInit(): void {
        let id = +this.route.snapshot.params['id'];
        this.event = this.eventsService.getEvent(id);
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        session.id = Math.max(...this.event.sessions.map(s => s.id)) + 1;
        this.event.sessions.push(session);
        this.eventsService.updateEvent(this.event);
        this.addMode = false;
    }
    
    cancelAddSession() {
        this.addMode = false;
    }
};