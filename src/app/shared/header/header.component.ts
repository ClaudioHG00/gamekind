import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  ruolo: string;

  constructor (
    public router: Router,
    public auth: AuthService,
  ) {}

  ngOnInit(): void {
    this.ruolo = JSON.parse(localStorage.getItem('user')).role;
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('login');
  }

}
