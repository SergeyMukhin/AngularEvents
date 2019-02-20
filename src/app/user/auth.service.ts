import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    currentUser: IUser;

    constructor(private http: HttpClient) { }

    loginUser(username: string, password: string) {
        const logInfo = {
            username,
            password
        };

        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        return this.http.post('/api/login', logInfo, options)
          .pipe(tap(data => {
              this.currentUser = <IUser>data['user'];
          }))
          .pipe(catchError(err => {
              return of(false);
          }));
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    checkAuthStatus() {
        this.http.get('/api/currentIdentity')
          .pipe(tap(data => {
                          if (data instanceof Object) {
                this.currentUser = data as IUser;
            }
        }))
          .subscribe();
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;

        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
    }

    logout() {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        this.currentUser = undefined;

        return this.http.post('/api/logout', {}, options);
    }
}
