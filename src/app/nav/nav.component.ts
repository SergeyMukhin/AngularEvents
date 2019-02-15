import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav.component.html',
    styleUrls: [ './nav.component.css' ]
})
export class NavComponent {
    constructor(private authService: AuthService) { }
}