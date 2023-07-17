import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  // ruolo: string;

  ruoloUtente: string;

  constructor (
    public router: Router,
    public auth: AuthService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    // this.ruolo = JSON.parse(localStorage.getItem('user')).role;
    this.userService.ruoloUtente$.subscribe((ruolo) => { this.ruoloUtente = ruolo;});
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('login');
  }

}
