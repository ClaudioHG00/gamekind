import { Component } from '@angular/core';
import { take } from 'rxjs';
import { Game } from 'src/app/models/game.model';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent {

  games: Game[];

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.onGetGames();
  }

  onGetGames() {
    this.gamesService.getGames().pipe(
      take(1)
    )
    .subscribe({
      next: (response) => {
        this.games = response;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
