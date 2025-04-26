import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.page.html',
  styleUrls: ['./detail-pokemon.page.scss'],
  imports: [CommonModule, IonicModule],
  standalone: true,
})
export class DetailPokemonPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
