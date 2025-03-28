import { Injectable } from '@angular/core';
import {User} from '../model/user.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: User[] = [
    {"username":"admin","password":"123","roles":['ADMIN']},
    {"username":"client","password":"123","roles":['USER']}
  ];

  loggedUser!: string;
  isLoggedIn: boolean = false;
  roles! : string[];



  constructor(private router: Router) { }

  SignIn(user : User) : boolean {
    let vaidUser : boolean = false;

    this.users.forEach(currentUser => {
      if (currentUser.username === user.username && currentUser.password === user.password) {
        vaidUser = true;
        this.loggedUser = currentUser.username;
        this.isLoggedIn = true;
        this.roles = currentUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isLoggedIn', String(this.isLoggedIn));
        //console.log(localStorage);
      }
    })

    return vaidUser;
  }

  isAdmin(): boolean {
    if(!this.roles) return false;
    return (this.roles.indexOf("ADMIN") > -1);
  }

  logout(): void {
    this.isLoggedIn = false;
    this.loggedUser = undefined!;
    this.roles= undefined!;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isLoggedIn', String(this.isLoggedIn));
    this.router.navigate(['/login']);
  }


  serLoggedUserFromLocalStorage(loggedUser: string) {
    this.loggedUser = loggedUser;
    this.isLoggedIn = true;
    this.getUserRoles(loggedUser);
  }

  private getUserRoles(loggedUser: string) {
    this.users.forEach(user => {
      if (user.username === loggedUser) {
        this.roles = user.roles;
      }
    })
  }
}
