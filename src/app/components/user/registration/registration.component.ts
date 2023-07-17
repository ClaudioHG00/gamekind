import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
// import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern
      (/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/) // Da togliere il gm
    ]),
    ripetiPassword: new FormControl('', Validators.required),
    accetto: new FormControl(false, Validators.requiredTrue),
    role: new FormControl('user'),
  })

  constructor(
    // private config: PrimeNGConfig,
    private modalService: NgbModal,
    private userService: UserService,
    private router: Router,
    private messageService: MessageService,
    ) {}

  ngOnInit(): void {
    // this.config.setTranslation({
    //   weak: 'weak',
    //   medium: 'medium',
    //   strong: 'strong',
    //   accept: 'accept',
    //   passwordPrompt: 'Write a password',
    // })
  }

  onSubmit(){
    console.log(this.form.value);
    this.userService.insertUser(this.form.value).subscribe({
      next: (res) => {
        console.log(res);
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'You are now registered', life: 3000});
        setTimeout(() => {
          this.router.navigateByUrl('login');
        }, 3000);
      },
      error: (e) => {
        console.log(e);
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Something went wrong with the registration.', life: 3000});
      }
    })
  }

  convalidaPassword(): boolean {
    let password = this.form.controls.password.value;
    let ripetiPassword = this.form.controls.ripetiPassword.value;

    if (password === ripetiPassword) {
      return true;
    } else {
      return false;
    }
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modale privacy', size: 'lg', centered: true}).result
    .then((res) => {
      // console.log('Azione da eseguire in caso positivo')
      this.aggiornaAccetto();
    }).catch((res) => {
      // console.log('Nessuna azione da eseguire')
      this.rifiutaAccetto();
    })
  }

  aggiornaAccetto() {
    this.form.controls.accetto.setValue(true); // Imposta il valore di 'accetto' su true
  }

  rifiutaAccetto() {
    this.form.controls.accetto.setValue(false);
  }


}
