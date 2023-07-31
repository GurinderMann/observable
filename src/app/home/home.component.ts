import { Component } from '@angular/core';
import { Favorites } from '../favorites';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: any = {}; // Assicurati di inizializzare l'oggetto products
  favorites: Favorites[] = [];

  constructor() {}

  addToFavorites(product: Favorites) {
    this.favorites.push(product);
    console.log(this.favorites)
  }

}

