import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent, EventsService } from '../shared/index';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right:20px; }
        .event-image { height: 100px; } 
        `
    ]
})
export class EventDetailsComponent implements OnInit {

    event: IEvent;
    constructor(private eventsService: EventsService,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
        let id = +this.route.snapshot.params['id'];
        this.event = this.eventsService.getEvent(id);
    }

};