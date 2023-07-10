import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { GamesComponent } from './components/games/games.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/games/detail/detail.component';
import { GamesListComponent } from './components/games/games-list/games-list.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { NewGameComponent } from './components/new-game/new-game.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'games', component: GamesComponent, children: [
    { path: 'detail/:title/:_id', component: DetailComponent},
    { path: 'new-game', component: NewGameComponent},
    { path: '', component: GamesListComponent, pathMatch:'full'},
  ]},
  { path: 'registration', component: RegistrationComponent},
  { path: 'error404', component: ErrorComponent},
  { path: '**', redirectTo: 'error404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
