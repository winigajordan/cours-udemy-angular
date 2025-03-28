import {Component, OnInit} from '@angular/core';
import {User} from '../model/user.model';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent implements OnInit {

  user = new User();
  erreur : boolean = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {

    }

    onLoggedin(){
      console.log(this.user);
      let isValidUser : boolean = this.authService.SignIn(this.user);
      if(isValidUser){
        this.router.navigate(['/']);
      } else {
        this.erreur=true;
        //alert("Login failed.");
      }
    }

}
