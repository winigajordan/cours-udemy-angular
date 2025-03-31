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
      this.authService.loadToken();
      if (this.authService.getToken()==null || this.authService.isTokenExpired()){
        this.router.navigate(['/login']);
      }

    }

  onLogout(): void {
   //console.log('logout');
    this.authService.logout();
  }
}
