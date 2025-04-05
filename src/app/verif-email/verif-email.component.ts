import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {FormsModule} from '@angular/forms';
import {User} from '../model/user.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-verif-email',
  imports: [
    FormsModule
  ],
  templateUrl: './verif-email.component.html',
  styles: ``
})
export class VerifEmailComponent implements OnInit {
  code: string = "";
  err: string = "";
  user: User = new User();


  ngOnInit() {
    this.user = this.authService.getRegisteredUser();
  }

  constructor(private authService: AuthService, private route : ActivatedRoute, private router: Router) { }

  onValidateEmail() {
    this.authService.validateEmail(this.code).subscribe({
      next : (res) => {
        alert("Compte activé")
        this.authService.login(this.user).subscribe({
          next: (res) => {
            let jwToken = res.headers.get('Authorization')!;
            this.authService.saveToken(jwToken);
            this.router.navigate(['/']);
          },
          error: (err) => {
            console.log(err);
          }
        })
      },  error : err1 =>  {
        /*if (err1.status === 400) {
          this.err = err1.message;
        }*/
        this.err = err1.error.message;

      }
    })
  }


}
