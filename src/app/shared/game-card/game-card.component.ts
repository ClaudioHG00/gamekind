import { Component, Input } from '@angular/core';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent {

  page = 1;
  gamesPerPagina = 6;

  @Input() pagina;
  @Input() games: Game[];

  accorciaTesto(descrizione): number {
    let lunghezzaMassima = 280;
    if(descrizione.length <= lunghezzaMassima) {
      return lunghezzaMassima;
    } else {
      let ultimoSpazio = descrizione.lastIndexOf(' ', lunghezzaMassima);
      return ultimoSpazio;
    }
  }

  onPageChange(e) {
    e.page = e.page + 1;
    this.page = e.page;
  }
}
