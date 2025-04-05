import { Injectable } from '@angular/core';
import {User} from '../model/user.model';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.development';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /*
  users: User[] = [
    {"username":"admin","password":"123","roles":['ADMIN']},
    {"username":"client","password":"123","roles":['USER']}
  ];

   */

  loggedUser!: string;
  isLoggedIn: boolean = false;
  roles! : string[];
  token!: string;
  private helper = new JwtHelperService();



  constructor(private router: Router, private  http : HttpClient) { }


  public regUser : User = new User();

  setRegisteredUser (user : User) {
    this.regUser=user;
  }

  getRegisteredUser(){
    return this.regUser;
  }





  login ( user : User){
    return this.http.post<User>(`${environment.apiUrlAuth}/login`, user, {observe: 'response'});
  }

  saveToken(jwtToken: string) {
    localStorage.setItem('token', jwtToken);
    this.token = jwtToken;
    this.isLoggedIn = true;
    this.decodeJwt()
  }

  decodeJwt(){
    if(this.token == undefined)
      return;
    const decodedToken = this.helper.decodeToken(this.token);
    this.roles = decodedToken.roles;
    this.loggedUser = decodedToken.sub;
  }

  getToken() : string {
    return this.token;
  }


  isAdmin(): boolean {
    if(!this.roles) return false;
    return this.roles.indexOf("ADMIN") >=0 ;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.loggedUser = undefined!;
    this.roles= undefined!;
    this.token = undefined!;

    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

    loadToken() {
    this.token = localStorage.getItem('token')!;
    this.decodeJwt();
  }

  isTokenExpired() {
    return this.helper.isTokenExpired(this.token);
  }


  registerUser(user : User) {
    return this.http.post<User>(`${environment.apiUrlAuth}/register`, user, {observe: 'response'});
  }

  validateEmail(code : string){
    return this.http.get<User>(environment.apiUrlAuth+'/validate/'+code);
  }




}
