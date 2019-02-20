import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ISession, restictedWords } from '../shared';

@Component({
    selector: 'create-session',
    templateUrl: './create-session.component.html',
    styles: [`
    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input, .error select, .error textarea { background-color: #E3C3C5 }
    .error ::-webkit-input-placeholder { color: #999 }
    .error ::-moz-placeholder { color: #999 }
    .error :moz-placeholder { color: #999 }
    .error :ms-input-placeholder { color: #999 }
  `]
})
export class CreateSessionComponent implements OnInit {
    @Output() saveNewSession: EventEmitter<ISession> = new EventEmitter<ISession>();
    @Output() cancelBtn: EventEmitter<any> = new EventEmitter();
    newSessionForm: FormGroup;
    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;

    ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(100), restictedWords(['foo', 'bar']) ]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    }

    addSession(formValues) {
        const session: ISession = {
            abstract: formValues.abstract,
            duration: +formValues.duration,
            level: formValues.level,
            name: formValues.name,
            presenter: formValues.presenter,
            voters: [],
            id: undefined
        };

        this.saveNewSession.emit(session);
    }

    cancel() {
        this.cancelBtn.emit();
    }
}
