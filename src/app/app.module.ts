import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { DividerModule} from 'primeng/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatorModule } from 'primeng/paginator';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ToastModule } from 'primeng/toast';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MaterialCompModule } from 'src/material.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { GamesComponent } from './components/games/games.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { GameCardComponent } from './shared/game-card/game-card.component';
import { GamesListComponent } from './components/games/games-list/games-list.component';
import { DetailComponent } from './components/games/detail/detail.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { NewGameComponent } from './components/new-game/new-game.component';
import { BorderComponent } from './shared/border/border.component';
import { LoginComponent } from './components/user/login/login.component';
import { MessageService } from 'primeng/api';
import { ProfileComponent } from './components/user/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent,
    GamesComponent,
    ErrorComponent,
    GameCardComponent,
    GamesListComponent,
    DetailComponent,
    RegistrationComponent,
    NewGameComponent,
    BorderComponent,
    LoginComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    DividerModule,
    PaginatorModule,
    HttpClientModule,
    ToastModule,
    CKEditorModule,
    MaterialCompModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
