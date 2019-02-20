import { VoterService } from "./voter.service";
import { ISession } from '../shared';
import { of } from 'rxjs';

describe('VoterService', () => {
    let voterService: VoterService, mockHttp;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
        voterService = new VoterService(mockHttp);
    })

    describe('deleteVoter', () => {

        it('should remove the voter from the list of voters', () => {
            const session = { voters: ['voter1', 'voter2'], id: 6 };
            mockHttp.delete.and.returnValue(of(false));

            voterService.deleteVoter(3, <ISession>session, 'voter1');

            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe('voter2');
        });

        it('should call http.delete with the right url', () => {
            const session = { voters: ['voter1', 'voter2'], id: 6 };
            mockHttp.delete.and.returnValue(of(false));

            voterService.deleteVoter(3, <ISession>session, 'voter1');

            expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/voter1')
        })
    })

    describe('addVoter', () => {
        it('should call http.post with the right url', () => {
            const session = { voters: ['voter2'], id: 6 };
            mockHttp.post.and.returnValue(of(false));

            voterService.addVoter(3, <ISession>session, 'voter1');

            expect(mockHttp.post).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/voter1', {}, jasmine.any(Object));
        })
    })
})