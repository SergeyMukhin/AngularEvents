import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { EventsListComponent, EventThumbnailComponent, EventDetailsComponent, CreateEventComponent} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavComponent } from './nav/nav.component';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [
    { provide: 'canDeactivateCreateEvent', useValue: (component: CreateEventComponent) => { if(component.isDirty) return window.confirm('You have not saved this event, do you really want to cancel?'); return true; } }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
