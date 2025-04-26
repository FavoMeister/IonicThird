import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list-pokemons',
    loadComponent: () => import('./pages/list-pokemons/list-pokemons.page').then( m => m.ListPokemonsPage)
  },
  {
    path: 'detail-pokemon',
    loadComponent: () => import('./pages/detail-pokemon/detail-pokemon.page').then( m => m.DetailPokemonPage)
  },
  {
    path: '',
    redirectTo: 'list-pokemons',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
