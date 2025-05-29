import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  constructor(private router: Router) {}

  isRegistered: boolean = false;
  isLoggedIn: boolean = false;

  namensurn: string = '';
  Rusername: string = '';
  Rpassword: string = '';
  Rphonenum: string = '';

  Lusername: string = '';
  Lpassword: string = '';

  ngOnInit(): void {
    const isStoredLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isStoredLoggedIn) {
      this.router.navigate(['/profile-detailed']);
    }
  }
  register(): void {
    console.log(
      'Shipping data clicked',
      this.namensurn,
      this.Rusername,
      this.Rpassword,
      this.Rphonenum
    );
    let parts = this.namensurn.trim().split(' ');
    if (parts.length !== 2) {
      alert('enter name and surname in 2 words');
      return;
    }

    let [first, last] = parts;
    let firstLetterIsUppercase =
      first[0] === first[0].toUpperCase() && last[0] === last[0].toUpperCase();
    let onlyLetters =
      /^[A-Za-z]+$/.test(parts[0]) && /^[A-Za-z]+$/.test(parts[1]);

    let phone = this.Rphonenum.trim();
    let onlyDigits = /^\+\d{10}$/.test(phone);

    if (firstLetterIsUppercase && onlyLetters && onlyDigits) {
      alert('You are registered');
      this.isRegistered = true;

      this.Rusername = this.Rusername.trim();
      this.Rpassword = this.Rpassword;
    } else {
      alert('Use correct format (for ex: Bob Smith)');
    }
  }

  login(): void {
    console.log('Login clicked', this.Lusername, this.Lpassword);
    if (
      this.Lusername.trim() === this.Rusername &&
      this.Lpassword === this.Rpassword
    ) {
      this.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/profile-detailed']);
      alert('Y are logged in');
    } else {
      alert('invalid credentials');
    }
  }
}
