import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../common/toastr.component';
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
    constructor(private toastrService: ToastrService,
                private route: ActivatedRoute) { }

    handleThumbnailClick(eventName: string) {
        this.toastrService.success(eventName);
    }
}