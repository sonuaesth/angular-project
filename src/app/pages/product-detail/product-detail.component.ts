import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Product } from '../catalog/catalog.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  productId: number = 0;
  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  notificationVisible = false;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.productId = +id;
        this.loadProduct();
      }
    });
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product);
      this.notificationVisible = true;
      setTimeout(() => {
        this.notificationVisible = false;
      }, 4000);
    }
  }

  loadProduct(): void {
    const mockProducts: Product[] = [
      new Product(
        1,
        '1 Sweater',
        'Sweaters',
        4500,
        5,
        'Winter 2025',
        '/assets/img/sw1.jpg',
        'Handmade and warm.',
        ['wool', 'unisex'],
        4.8
      ),
      new Product(
        2,
        '2 Sweater',
        'Sweaters',
        5200,
        3,
        'Fall 2024',
        '/assets/img/sw2.jpg',
        'Bright and cozy sweater.',
        ['wool'],
        4.5
      ),
      new Product(
        3,
        'qyqy',
        'Sweaters',
        3600,
        7,
        'Fall 2023',
        'assets/img/sw3.jpg',
        'Cute and sunny.',
        ['wool', 'unisex'],
        4.7
      ),
      new Product(
        4,
        'ququ',
        'Sweaters',
        5600,
        2,
        'Fall 2022',
        'assets/img/sw4.jpg',
        'Classic sweater.',
        ['wool'],
        4.3
      ),
      new Product(
        5,
        'qoqo',
        'Sweaters',
        4200,
        4,
        'Fall 2025',
        'assets/img/sw5.jpg',
        'Brand new collection.',
        ['wool', 'unisex'],
        4.9
      ),
      new Product(
        6,
        'qaqa',
        'Sweaters',
        6900,
        10,
        'Winter 2023',
        'assets/img/sw6.jpg',
        'Dark and mysterious.',
        ['wool'],
        5.0
      ),
      new Product(
        7,
        'quiqui',
        'Sweaters',
        4100,
        8,
        'Fall 2025',
        'assets/img/sw7.jpg',
        'Brand new collection.',
        ['wool', 'unisex'],
        4.9
      ),
      new Product(
        8,
        'qwaqwa',
        'Sweaters',
        7000,
        9,
        'Winter 2023',
        'assets/img/sw8.jpg',
        'Dark and mysterious.',
        ['wool'],
        5.0
      ),

      new Product(
        8,
        'pepe',
        'Hats',
        2000,
        2,
        'Winter 2025',
        'assets/img/hat1.jpg',
        'Handmade and warm.',
        ['wool', 'unisex'],
        4.8
      ),
      new Product(
        9,
        'pypy',
        'Hats',
        1400,
        3,
        'Winter 2025',
        'assets/img/hat2.jpg',
        'Handmade and warm.',
        ['wool', 'unisex'],
        4.8
      ),
      new Product(
        10,
        'pupu',
        'Hats',
        2000,
        4,
        'Winter 2025',
        'assets/img/hat3.jpg',
        'Handmade and warm.',
        ['wool', 'unisex'],
        4.8
      ),
      new Product(
        11,
        'pipi',
        'Hats',
        3200,
        2,
        'Winter 2025',
        'assets/img/hat4.jpg',
        'Handmade and warm.',
        ['wool', 'unisex'],
        4.8
      ),
      new Product(
        12,
        'popo',
        'Hats',
        1200,
        6,
        'Winter 2025',
        'assets/img/hat5.jpg',
        'Handmade and warm.',
        ['wool', 'unisex'],
        4.8
      ),

      new Product(
        13,
        'wewe',
        'Scarves',
        2000,
        2,
        'Winter 2025',
        'assets/img/sc1.jpg',
        'Handmade and warm.',
        ['wool', 'unisex'],
        4.8
      ),
      new Product(
        14,
        'wywy',
        'Scarves',
        2000,
        2,
        'Winter 2025',
        'assets/img/sc2.jpg',
        'Handmade and warm.',
        ['wool', 'unisex'],
        4.8
      ),
      new Product(
        15,
        'wuwu',
        'Scarves',
        2000,
        2,
        'Winter 2025',
        'assets/img/sc3.jpg',
        'Handmade and warm.',
        ['wool', 'unisex'],
        4.8
      ),
      new Product(
        16,
        'wiwi',
        'Scarves',
        2000,
        2,
        'Winter 2025',
        'assets/img/sc4.jpg',
        'Handmade and warm.',
        ['wool', 'unisex'],
        4.8
      ),
      new Product(
        17,
        'wowo',
        'Scarves',
        2000,
        2,
        'Winter 2025',
        'assets/img/sc5.jpg',
        'Handmade and warm.',
        ['wool', 'unisex'],
        4.8
      ),

      new Product(
        18,
        'wowo',
        'Scarves',
        2000,
        2,
        'Winter 2025',
        'assets/img/sc6.jpg',
        'Handmade and warm.',
        ['wool', 'unisex'],
        4.8
      ),

      new Product(
        19,
        'wowo',
        'Scarves',
        2000,
        2,
        'Winter 2025',
        'assets/img/sc7.jpg',
        'Handmade and warm.',
        ['wool', 'unisex'],
        4.8
      ),

      new Product(
        20,
        'rere',
        'Gloves',
        1000,
        2,
        'Winter 2025',
        'assets/img/gl1.jpg',
        'Handmade and warm.',
        ['wool', 'unisex'],
        4.8
      ),
      new Product(
        21,
        'ryry',
        'Gloves',
        1000,
        2,
        'Winter 2025',
        'assets/img/gl2.jpg',
        'Handmade and warm.',
        ['wool', 'unisex'],
        4.8
      ),

      new Product(
        22,
        'ruru',
        'Gloves',
        1000,
        2,
        'Winter 2025',
        'assets/img/gl3.jpg',
        'Handmade and warm.',
        ['wool', 'unisex'],
        4.8
      ),

      new Product(
        23,
        'riri',
        'Gloves',
        1000,
        2,
        'Winter 2025',
        'assets/img/gl4.jpg',
        'Handmade and warm.',
        ['wool', 'unisex'],
        4.8
      ),

      new Product(
        24,
        'roro',
        'Gloves',
        1000,
        2,
        'Winter 2025',
        'assets/img/gl5.jpg',
        'Handmade and warm.',
        ['wool', 'unisex'],
        4.8
      ),
      new Product(
        25,
        'rara',
        'Gloves',
        1000,
        2,
        'Winter 2025',
        'assets/img/gl6.jpg',
        'Handmade and warm.',
        ['wool', 'unisex'],
        4.8
      ),

      new Product(
        26,
        'gege',
        'Toys',
        1000,
        2,
        'Winter 2025',
        'assets/img/toy1.jpg',
        'Tiny in size but big in heart — our crochet toys are made with patience, passion, and a pinch of personality.',
        ['wool', 'unisex'],
        4.8
      ),

      new Product(
        27,
        'gygy',
        'Toys',
        1000,
        2,
        'Winter 2025',
        'assets/img/toy2.jpg',
        'This whimsical yarn buddy adds a touch of magic to nurseries, desks, or shelves — cute, cuddly, and full of character.',
        ['wool', 'unisex'],
        4.8
      ),

      new Product(
        28,
        'gugu',
        'Toys',
        1000,
        2,
        'Winter 2025',
        'assets/img/toy3.jpg',
        'Lovingly crocheted by hand, this plushie makes a thoughtful gift for birthdays, baby showers, or just because.',
        ['wool', 'unisex'],
        4.8
      ),

      new Product(
        29,
        'gigi',
        'Toys',
        1000,
        2,
        'Winter 2025',
        'assets/img/toy4.jpg',
        'Bring joy and charm into your home with this handmade crochet creature — each stitch tells a story.',
        ['wool', 'unisex'],
        4.8
      ),

      new Product(
        30,
        'gogo',
        'Toys',
        1000,
        2,
        'Winter 2025',
        'assets/img/toy5.jpg',
        'A soft, one-of-a-kind amigurumi toy made from 100% cotton yarn — safe for kids and adorable for collectors.',
        ['wool', 'unisex'],
        4.8
      ),

      new Product(
        31,
        'gaga',
        'Toys',
        1000,
        2,
        'Winter 2025',
        'assets/img/toy6.jpg',
        'Handcrafted with love, this cozy crochet friend is the perfect companion for little adventures and bedtime snuggles..',
        ['wool', 'unisex'],
        4.8
      ),
    ];

    this.product = mockProducts.find((p) => p.id === this.productId);
  }
}
