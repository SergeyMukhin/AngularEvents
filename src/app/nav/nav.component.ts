import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventsService } from '../events';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav.component.html',
    styleUrls: [ './nav.component.css' ]
})
export class NavComponent {
    searchTerm: string = "";
    foundSessions: ISession[] = [];

    constructor(private authService: AuthService,
                private eventsService: EventsService,) { }

    searchSessions(searchTerm) {
        this.eventsService.searchSessions(searchTerm).subscribe(sessions => { this.foundSessions = sessions; } );
    }
}