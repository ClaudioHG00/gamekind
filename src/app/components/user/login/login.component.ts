import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginError = "";

  constructor(
    private auth: AuthService,
    private router: Router,
    private messageService: MessageService,
    private userService: UserService,
  ){}

  onSubmit(form){
    if(form.email !== '' && form.password !== ''){

      this.auth.login(form.email, form.password).subscribe({
        next: (res) => {
          if(res) {
            this.auth.saveStorage(res);

            this.userService.updateRuoloUtente(res.role);

            this.messageService.add({severity: 'success', summary: 'Success', detail: 'Logged in successfully', life: 2000});
            setTimeout(() => {
              this.router.navigateByUrl('home');
            }, 2000);

          } else {
            this.loginError = 'Email or password invalid.';
            this.messageService.add({severity: 'error', summary: 'Error', detail: 'Email or password invalid.', life: 2000});

          }
        },
        error: (error) => {
          console.log(error);
          this.loginError = 'Email or password invalid.';
          this.messageService.add({severity: 'error', summary: 'Error', detail: 'Email or password invalid.', life: 2000});

        }
      })
    }
  }
}
