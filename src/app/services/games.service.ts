import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';
import { GAMES } from '../mock/game.mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  getGames(): Observable<Game[]> {
    return of (GAMES);
  }

  getGame(id: number): Observable<Game> {
    const game = GAMES.find(game => game._id === id);
    return of (game);
  }

  addGame(form: any): Observable<Game[]> {
    GAMES.push(form);
    return of (GAMES);
  }

}
