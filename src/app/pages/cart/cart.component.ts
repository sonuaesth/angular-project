import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../catalog/catalog.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  items: Product[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  totalPrice: number = 0;

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.totalPrice = 0;
    this.items.forEach((item) => {
      this.totalPrice += item.price;
    });
  }

  removeFromCart(product: Product): void {
    this.items = this.items.filter((item) => item !== product);
    this.cartService.removeItem(product);
    this.calculateTotal();
  }

  orderTotal: number = 0;
  startOrder(): void {
    const isStoreduserLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (!isStoreduserLoggedIn) {
      alert('Please log in to continue');
      this.router.navigate(['/profile']);
      return;
    }

    localStorage.setItem('orderTotal', this.totalPrice.toString());
    this.router.navigate(['/order']);
  }
}
