import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {AuthService} from './service/auth.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'PremierAtelelier';

  constructor(public authService: AuthService, private router : Router) {
  }

  ngOnInit(): void {
       let isLoggedIn: string;
       let loggedUser: string;
       isLoggedIn = localStorage.getItem('isLoggedIn')!;
       loggedUser = localStorage.getItem('loggedUser')!;

       if (isLoggedIn !="true" || !loggedUser) {
         this.router.navigate(['/login']);
       } else {
          this.authService.serLoggedUserFromLocalStorage(loggedUser);
       }

    }

  onLogout(): void {
   //console.log('logout');
    this.authService.logout();
  }
}
