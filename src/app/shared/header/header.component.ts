import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor (
    public router: Router,
    public auth: AuthService,
  ) {}

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('login');
  }

}
