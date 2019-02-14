import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right:20px; }
        .event-image { height: 100px; } 
        `
    ]
})
export class EventDetailsComponent implements OnInit {

    event: any;
    constructor(private eventsService: EventsService,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
        let id = +this.route.snapshot.params['id'];
        this.event = this.eventsService.getEvent(id);
    }

};