import {Component, OnInit} from '@angular/core';
import {User} from '../model/user.model';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../service/auth.service';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  user = new User();
  err : number = 0;
  errContent : string = 'Login ou mot de passe incorrect';

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {

    }

    onLoggedin(){
      this.authService.login(this.user).subscribe({
        next: data => {
          let jwtToken = data.headers.get('Authorization')!;
          this.authService.saveToken(jwtToken);
          this.router.navigate(['/']);
        },
        error:(reqError) => {
          this.err = 1;
          console.log(reqError);

         if (reqError.error==null)
         {
           this.errContent = "Login ou mot de passe incorrect";
         }

          if (reqError.error.errorCause == "disabled") {
            this.errContent = reqError.error.message;
          }

          }
        }
      )
    }

}
