import { Component } from '@angular/core';
import { Favorites } from '../favorites';
import { ObsService } from '../obs.service';
import { Cart } from '../cart';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  products: any = {}
  favorites: Favorites[] = [];
  cart: Cart[]=[]

  constructor( private productsvc: ObsService
    ) {}
  ngOnInit(){
    this.productsvc.get()
      .subscribe(data => {
        this.products = data
        console.log(this.products)
      });
  }
  addToFavorites(product: Favorites) {
    this.favorites.push(product);
    console.log(this.favorites)
  }
  addToCart(product: Cart) {
    this.favorites.push(product);
    console.log(this.favorites)
  }
}
