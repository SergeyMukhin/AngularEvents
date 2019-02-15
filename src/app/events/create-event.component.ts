import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template:`
    <h1>New Event</h1>
    <hr>
    <div class='col-md-6'>
        <h3> [Create Event Form] </h3>
        <br/>
        <br/>
        <button class='btn btn-primary' type='submit'>Save</button> 
        <button (click)='goBack()' class='btn btn-default' type='button'>Cancel</button>
    </div>
    `
})
export class CreateEventComponent {
    isDirty: boolean = true;

    constructor(private router: Router) { }

    goBack() {
        this.router.navigate(['/events']);
    }
}