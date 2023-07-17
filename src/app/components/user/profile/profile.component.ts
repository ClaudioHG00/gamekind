import { Component, OnInit} from '@angular/core';
import { take } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import * as moment from 'moment';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  dati: any;

  dataRegistrazione: any;

  noteAdd: SafeHtml;



  constructor(private userService: UserService,private sanitizer: DomSanitizer){

  }
 ngOnInit(): void {
  if(JSON.parse(localStorage.getItem('user'))){
    this.prendiProfilo(JSON.parse(localStorage.getItem('user')).email);
  }

 }


 prendiProfilo(email: string){
  this.userService.getUser(email).pipe(take(1)).subscribe({
    next: res => {
      this.dati = res;
      this.dataRegistrazione = moment(this.dati.createdAt).locale('it').format('dddd DD MMMM YYYY');
      this.noteAdd = this.sanitizer.bypassSecurityTrustHtml(res.note);
    }
  })
 }


}
