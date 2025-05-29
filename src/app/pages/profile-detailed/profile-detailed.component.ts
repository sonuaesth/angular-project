import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-detailed',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './profile-detailed.component.html',
  styleUrl: './profile-detailed.component.css',
})
export class ProfileDetailedComponent {
  constructor(private router: Router) {}

  country: string = '';
  city: string = '';
  adress: string = '';

  shipto(): void {
    console.log('Changes saved', this.country, this.city, this.adress);
    localStorage.setItem(
      'shippingAdr',
      this.country + ' - ' + this.city + ' - ' + this.adress
    );
  }

  cardn: string = '';
  dateofexp: string = '';
  cvv: string = '';
  payby(): void {
    console.log('Changes saved', this.cardn, this.dateofexp, this.cvv);
  }

  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['/profile']);
  }
}
