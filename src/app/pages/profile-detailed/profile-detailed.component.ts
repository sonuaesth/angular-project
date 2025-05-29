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

  country: string = 'Your country';
  city: string = 'Your city';
  adress: string = 'Your adress';

  ngOnInit(): void {
    const savedCountry = localStorage.getItem('country');
    const savedCity = localStorage.getItem('city');
    const savedAdress = localStorage.getItem('adress');

    if (savedCountry) this.country = savedCountry;
    if (savedCity) this.city = savedCity;
    if (savedAdress) this.adress = savedAdress;

    const savedCardN = localStorage.getItem('payBy');
    const savedDateoE = localStorage.getItem('dateofexp');
    const savedCVV = localStorage.getItem('cvv');

    if (savedCardN) this.cardn = savedCardN;
    if (savedDateoE) this.dateofexp = savedDateoE;
    if (savedCVV) this.cvv = savedCVV;
  }

  shipto(): void {
    console.log('Changes saved', this.country, this.city, this.adress);
    localStorage.setItem('country', this.country);
    localStorage.setItem('city', this.city);
    localStorage.setItem('adress', this.adress);
    localStorage.setItem(
      'shippingAdr',
      this.country + ' - ' + this.city + ' - ' + this.adress
    );
  }

  cardn: string = '';
  dateofexp: string = '';
  cvv: string = '';
  payby(): void {
    localStorage.setItem('dateofexp', this.dateofexp);
    let correctDate = /^\d{2}\/\d{2}$/.test(this.dateofexp);
    if (!correctDate) {
      alert('enter date of expiration in DD/DD format');
      return;
    }
    localStorage.setItem('cvv', this.cvv);
    let correctCvv = /^\d{3}$/.test(this.cvv);
    if (!correctCvv) {
      alert('enter correct cvv');
      return;
    }
    console.log('Changes saved', this.cardn, this.dateofexp, this.cvv);
    localStorage.setItem('payBy', this.cardn);
  }

  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['/profile']);
    localStorage.removeItem('country');
    localStorage.removeItem('city');
    localStorage.removeItem('adress');
    localStorage.removeItem('cardn');
    localStorage.removeItem('dateofexp');
    localStorage.removeItem('cvv');
  }
}
