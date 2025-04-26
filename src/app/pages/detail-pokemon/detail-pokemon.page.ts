import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController, NavParams } from '@ionic/angular';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.page.html',
  styleUrls: ['./detail-pokemon.page.scss'],
  imports: [CommonModule, IonicModule],
  standalone: true,
})
export class DetailPokemonPage {

  public pokemon: Pokemon
  
  constructor(
    private navParamas: NavParams,
    private navController: NavController
  ) { 
    this.pokemon = this.navParamas.data["pokemon"];
    console.log(this.pokemon);
    
  }

  ngOnInit() {
  }

  goBack(){
    this.navController.pop(); // Like remove the detail route
  }
}
