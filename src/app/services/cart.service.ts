import { Injectable } from '@angular/core';
import { Product } from '../pages/catalog/catalog.component';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: Product[] = [];
  addToCart(product: Product): void {
    this.items.push(product);
  }
  getItems(): Product[] {
    return this.items;
  }
  clearCart(): void {
    this.items = [];
  }
  removeItem(product: Product): void {
    this.items = this.items.filter((item) => item !== product);
  }
}
