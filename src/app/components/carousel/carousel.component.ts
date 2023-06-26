import { Component, OnInit, Input } from '@angular/core';
import { Game } from './../../models/game.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  percorso = '../../../assets/images/imageBg-';

  images = [
    {id: 1, label: 'League of Legends'},
    {id: 2, label: 'Minecraft'},
    {id: 3, label: 'World of Warcraft'},
    {id: 4, label: 'Guild Wars 2'},
    {id: 5, label: 'Lost Ark'},
    {id: 6, label: 'Dota 2'},
  ];

  @Input() games: Game[];

  constructor() {
    console.log('Constructor started')
  }

  ngOnInit(): void {
    console.log('Component started')
  }

}
