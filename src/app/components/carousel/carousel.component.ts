import { Component, OnInit } from '@angular/core';

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
  ];

  constructor() {
    console.log('Constructor started')
  }

  ngOnInit(): void {
    console.log('Component started')
  }

}
