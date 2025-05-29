import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  totalPrice: number = 0;
  shippingAdr: string = '';

  payBy: number = 0;
  orderDate: string = '';
  deliveryDate: string = '';

  ngOnInit(): void {
    const now = new Date();
    const delivery = new Date();
    delivery.setDate(now.getDate() + 7);

    this.orderDate = now.toLocaleDateString('en-GB');
    this.deliveryDate = delivery.toLocaleDateString('en-GB');

    const stored = localStorage.getItem('orderTotal');
    this.totalPrice = stored ? parseFloat(stored) : 0;

    const storedAd = localStorage.getItem('shippingAdr');
    this.shippingAdr = storedAd ? storedAd : '';

    const storedCN = localStorage.getItem('payBy');
    this.payBy = storedCN ? parseFloat(storedCN) : 0;
  }
}
