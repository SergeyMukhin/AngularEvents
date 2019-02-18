import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/index';

@Component({
    templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
    events: IEvent[];
    ngOnInit(): void {
        this.events = this.route.snapshot.data['events'];
    } 
    constructor(private route: ActivatedRoute) { }
}