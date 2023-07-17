import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Game } from 'src/app/models/game.model';
import { GamesService } from 'src/app/services/games.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent {

  @ViewChild('modalGame') modale: ElementRef;

  form = new FormGroup({
    _id: new FormControl(),
    title: new FormControl(''),
    genre: new FormControl(''),
    image: new FormControl(''),
    description: new FormControl(''),
    developer: new FormControl(''),
    multiplayer: new FormControl(false),
  });

  Editor = ClassicEditor;
  editorConfig = {
    toolbar: {
        items: [
            'bold',
            'italic',
            'link',
            '|',
            'bulletedList',
            'numberedList',
            '|',
            'indent',
            'outdent',
            '|',
            'insertTable',
            'undo',
            'redo',
        ]
    },
    image: {
        toolbar: [
            'imageStyle:full',
            'imageStyle:side',
            '|',
            'imageTextAlternative'
        ]
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells'
        ]
    },
    height: 300,
};

  game: Game;

  constructor(
    private gamesService: GamesService,
    private modalService: NgbModal,
    private router: Router,
    private messageService: MessageService,
    ){}

  onSubmit(){
    console.log(this.form.value);
    if(this.form.value){
      const gameForm: Game = {
        _id: this.form.value._id,
        title: this.form.value.title,
        description: this.form.value.description,
        genre: this.form.value.genre,
        developer: this.form.value.developer,
        multiplayer: this.form.value.multiplayer,
        image: this.form.value.image,
      }
      this.game = gameForm;
      this.gamesService.addGame(this.form.value).subscribe({
        next: (res) => {
          console.log(res);
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Game added successfully.', life: 4000});
          this.open(this.modale);
        },
        error: (e) => {
          console.log(e)
          this.messageService.add({severity: 'error', summary: 'Error', detail: 'Something went wrong while adding the game', life: 4000});
        }
      })
    }
  }


  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modale privacy', size: 'lg', centered: true} ).result
    .then((res) => {
      this.form.reset();
    })
    .catch((res) => {
      this.router.navigateByUrl('games');
    })
  }
}
