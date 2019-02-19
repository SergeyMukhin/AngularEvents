import { Injectable } from "@angular/core";
import { ISession } from '../shared';

@Injectable({
    providedIn: 'root'
})
export class VoterService {
    
    deleteVoter(session: ISession, voterName: string) {
        session.voters = session.voters.filter(v => v !== voterName);
    }

    addVoter(session: ISession, voterName: string) {
        session.voters.push(voterName);
    }

    userHasVoted(session: ISession, voterName: string) {
        return session.voters.find(v => v === voterName);
    }
}