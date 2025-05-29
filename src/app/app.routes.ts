// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProfileDetailedComponent } from './pages/profile-detailed/profile-detailed.component';
import { OrderComponent } from './pages/order/order.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'cart', component: CartComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'profile-detailed', component: ProfileDetailedComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'order', component: OrderComponent },
];
