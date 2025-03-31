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
  err : number = 0;

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
        error:() => {
          this.err = 1;
        }
        }
      )
    }

}
