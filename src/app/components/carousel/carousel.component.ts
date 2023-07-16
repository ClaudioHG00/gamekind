import { Component, OnInit, Input } from '@angular/core';
import { Game } from './../../models/game.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  percorso = '../../../assets/images/imageBg-';

  @Input() pagina;

  images = [
    {id: 26, label: 'Resident Evil'},
    {id: 14, label: 'The Elder Scrolls V: Skyrim'},
    {id: 23, label: 'Outer Wilds'},
    {id: 1, label: 'League of Legends'},
    {id: 4, label: 'Guild Wars 2'},
    {id: 13, label: 'Horizon Zero Dawn'},
  ];

  @Input() games: Game[];

  constructor() {
    console.log('Constructor started')
  }

  ngOnInit(): void {
    console.log('Component started')
  }

}
