import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { SessionListComponent } from './session-list.component';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from './voter.service';
import { UpvoteComponent } from './upvote.component';
import { DurationPipe } from '../shared';
import { CollapsibleWellComponent } from 'src/app/common';
import { By } from '@angular/platform-browser';

describe('sessionListIntergrated', () => {
    let fixture: ComponentFixture<SessionListComponent>;
    let component: SessionListComponent;
    let element: HTMLElement;
    let debugEl: DebugElement;

    beforeEach(async (() => {
        let mockAuthService = {
            isAuthenticated: () => true,
            currentUser: { userName: 'userName' }
        };
        let mockVoterService = {
            userHasVoted: () => true
        };

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionListComponent,
                //UpvoteComponent,
                DurationPipe,
                //CollapsibleWellComponent
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService }
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        })
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;
    })

    describe('initial display', () => {

        it('should have the correct session title', () => {
            component.sessions = [
                {
                  id: 1,
                  name: "Using Angular 4 Pipes",
                  presenter: "Peter Bacon Darwin",
                  duration: 1,
                  level: "Intermediate",
                  abstract: `Learn all about the new pipes in Angular 4, both 
                  how to write them, and how to get the new AI CLI to write 
                  them for you. Given by the famous PBD, president of Angular 
                  University (formerly Oxford University)`,
                  voters: ['bradgreen', 'igorminar', 'martinfowler']
                }
              ]

              component.filterBy = 'all';
              component.sortBy = 'name';
              component.eventId = 4;

              component.ngOnChanges();

              fixture.detectChanges();

              //expect(element.querySelector('[well-title]').textContent).toContain('Using Angular 4 Pipes');

              expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Using Angular 4 Pipes');
        })
    })
})