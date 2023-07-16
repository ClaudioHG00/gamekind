import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
    accetto: new FormControl(false, Validators.requiredTrue)
  })

  constructor(
    private config: PrimeNGConfig,
    private modalService: NgbModal,
    ) {}

  ngOnInit(): void {
    this.config.setTranslation({
      weak: 'weak',
      medium: 'medium',
      strong: 'strong',
      accept: 'accept',
      passwordPrompt: 'Write a password',
    })
  }

  onSubmit(){
    console.log(this.form.value);
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
      console.log('Azione da eseguire in caso positivo')
    }).catch((res) => {
      console.log('Nessuna azione da eseguire')
    })
  }

}
