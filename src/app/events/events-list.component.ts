import { Component, OnInit } from '@angular/core';
import { EventsService } from './shared/events.service';
import { ToastrService } from '../common/toastr.component';

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
    events: any[];
    ngOnInit(): void {
        this.events = this.eventsService.getEvents();
    } 
    constructor(private eventsService: EventsService,
                private toastrService: ToastrService) { }

    handleThumbnailClick(eventName: string) {
        this.toastrService.success(eventName);
    }
}