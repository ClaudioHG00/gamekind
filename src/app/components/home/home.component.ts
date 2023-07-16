import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { GamesService } from 'src/app/services/games.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  title = 'gamekind';

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
