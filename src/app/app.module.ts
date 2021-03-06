import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Toastr, CollapsibleWellComponent, TOASTR_TOKEN, JQUERY_TOKEN, SimpleModalComponent, ModalTriggerDirective } from './common';
import { EventsListComponent,
         EventThumbnailComponent,
         EventDetailsComponent,
         CreateEventComponent,
         CreateSessionComponent,
         SessionListComponent,
         DurationPipe,
         UpvoteComponent,
         LocationValidator
        } from './events/index';
import { EventsAppComponent } from './events-app.component';
import { NavComponent } from './nav/nav.component';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';

const toastr: Toastr = window['toastr'];
const jquery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator
  ],
  providers: [
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQUERY_TOKEN, useValue: jquery },
    { provide: 'canDeactivateCreateEvent', useValue: (component: CreateEventComponent) => { if (component.isDirty) { return window.confirm('You have not saved this event, do you really want to cancel?'); } return true; } }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
