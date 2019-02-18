import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from '../shared';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges { 
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    visibleSessions: ISession[] = [];

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(this.sortByNameAsc) : this.visibleSessions.sort(this.sortByVotesDesc);
        }
    }

    filterSessions(filterBy: string) {
        if(filterBy === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter(s => s.level.toLocaleLowerCase() === filterBy);
        }
    }

    sortByNameAsc(sessionA: ISession, sessionB: ISession) {
        if (sessionA.name > sessionB.name) return 1;
        else if (sessionA.name === sessionB.name) return 0;
        else return -1;
    }

    sortByVotesDesc(sessionA: ISession, sessionB: ISession) {
        return sessionB.voters.length - sessionA.voters.length;
    }
}