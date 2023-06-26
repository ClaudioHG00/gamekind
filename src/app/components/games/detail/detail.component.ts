import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';
import { Game } from 'src/app/models/game.model';
import { take } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{

  game: Game;

  constructor(
    private activatedRoute: ActivatedRoute,
    private gamesService: GamesService,
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.onGetGame();
  }

  onGetGame(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('_id'));
    this.gamesService.getGame(id).pipe(
      take(1)
      ).subscribe({
        next: (response) => {
          this.game = response;
        },
        error: (error) => console.log(error)
    })
  }

}
