import { Component, Input } from '@angular/core';

import { Product } from './../../Models/Product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  selectedProduct: Product;

  products = [
    {
      id: 1,
      name: 'Classic White T-Shirt',
      description: 'A comfortable and stylish white t-shirt for everyday wear.',
      brand: 'FashionHub',
      gender: 'Unisex',
      category: 'Clothing',
      size: ['3', '5', '7', '4', '7', '2', '6'],
      color: ['white', 'green', ' black', 'grey', 'red'],
      price: 199.99,
      discountPrice: 30,
      is_in_inventory: true,
      items_left: 50,
      imageURL: 'https://modone.com/eng_pl_Mens-plain-t-shirt-S970-white-8863_1.jpg',
      slug: 'classic-white-t-shirt',
    },
    
    {
      id: 2,
      name: 'Sports Sneakers',
      description: 'High-performance sports sneakers for your active lifestyle.',
      brand: 'AthleticGear',
      gender: 'Men',
      category: 'Footwear',
      size: ['3', '5', '7', '4', '7', '2', '6'],
      color: ['white', 'green', ' black', 'grey', 'red'],
      price: 1049.99,
      is_in_inventory: false,
      items_left: 30,
      imageURL: 'https://th.bing.com/th/id/OIP.YguOkIP2xIjpoReX_q0R4gHaHa?rs=1&pid=ImgDetMain',
      slug: 'sports-sneakers',
    },

    {
      id: 3,
      name: 'Slim Fit Denim Jeans',
      description: 'Modern slim fit denim jeans for a trendy look.',
      brand: 'DenimStyle',
      gender: 'Women',
      category: 'Clothing',
      size: ['S'],
      color: ['Blue'],
      price: 1039.99,
      discountPrice: 140,
      is_in_inventory: true,
      items_left: 20,
      imageURL: 'https://www.dandyfellow.com/images/j06-slim-fit-denim-jeans-p43335-429562_image.jpg',
      slug: 'slim-fit-denim-jeans',
    },
    {
      id: 4,
      name: 'Leather Messenger Bag',
      description: 'Stylish and durable leather messenger bag for daily use.',
      brand: 'UrbanLeather',
      gender: 'Unisex',
      category: 'Accessories',
      size: ['One Size'],
      color: ['Brown'],
      price: 2059.99,
      is_in_inventory: true,
      items_left: 15,
      imageURL: 'https://cdn.shopify.com/s/files/1/0267/6758/9428/products/1-14_9c4d15a7-f65f-4ee1-a86d-c8a094de2bcf.jpg?v=1590951422',
      slug: 'leather-messenger-bag',
    },
    {
      id: 5,
      name: 'Casual Striped Shirt',
      description: 'Casual striped shirt for a laid-back and trendy look.',
      brand: 'CasualChic',
      gender: 'Men',
      category: 'Clothing',
      size: ['L'],
      color: ['Blue/White'],
      price: 1129.99,
      discountPrice: 230,
      is_in_inventory: false,
      items_left: 25,
      imageURL: 'https://images-na.ssl-images-amazon.com/images/I/610SVky0MdL._AC_UX679_.jpg',
      slug: 'casual-striped-shirt',
    },

    {
      id: 6,
      name: 'Classic Leather Wallet',
      description: 'Elegant classic leather wallet with multiple card slots.',
      brand: 'FashionCraft',
      gender: 'Unisex',
      category: 'Accessories',
      size: ['One Size'],
      color: ['Black'],
      price: 340.99,
      is_in_inventory: false,
      items_left: 18,
      imageURL: 'https://cdn.notonthehighstreet.com/fs/f6/1e/37c0-5bde-48d6-acf3-7c9888b0b197/original_mens-bi-fold-leather-wallet.jpg',
      slug: 'classic-leather-wallet',
    },
    {
      id: 7,
      name: 'Running Shoes',
      description: 'Lightweight and comfortable running shoes for athletes.',
      brand: 'RunElite',
      gender: 'Women',
      category: 'Footwear',
      size: ['8'],
      color: ['Pink/Gray'],
      price: 54.99,
      discountPrice: 7,
      is_in_inventory: true,
      items_left: 22,
      imageURL: 'https://th.bing.com/th/id/OIP.FZ0i1RSGRZ5Y59agjFDI_gHaGd?rs=1&pid=ImgDetMain',
      slug: 'running-shoes',
    },
    {
      id: 8,
      name: 'Formal Slim Fit Suit',
      description: 'Tailored formal slim fit suit for a polished look.',
      brand: 'ElegantWear',
      gender: 'Men',
      category: 'Clothing',
      size: ['XL'],
      color: ['Charcoal Gray'],
      price: 1290.99,
      discountPrice: 230,
      is_in_inventory: false,
      items_left: 12,
      imageURL: 'https://happygentleman.com/wp-content/uploads/2020/06/ws21-charcoal-4.jpg',
      slug: 'formal-slim-fit-suit',
    },
    {
      id: 9,
      name: 'Designer Sunglasses',
      description: 'Fashionable designer sunglasses for UV protection.',
      brand: 'SunStyle',
      gender: 'Unisex',
      category: 'Accessories',
      size: ['One Size'],
      color: ['Gold/Brown'],
      price: 79.99,
      is_in_inventory: true,
      items_left: 30,
      imageURL: 'https://www.online-welcome.com/wp-content/uploads/2017/03/013-c3-brown-brown1.jpg',
      slug: 'designer-sunglasses',
    },
    {
      id: 10,
      name: 'Cozy Knit Sweater',
      description: 'Warm and cozy knit sweater for chilly days.',
      brand: 'WinterWarmth',
      gender: 'Women',
      category: 'Clothing',
      size: ['S'],
      color: ['Burgundy'],
      price: 944.99,
      discountPrice: 180,
      is_in_inventory: true,
      items_left: 15,
      imageURL: 'https://i.pinimg.com/originals/c4/0e/b9/c40eb9ab49e459161978397dc8811b8b.jpg',
      slug: 'cozy-knit-sweater',
    },
  ];

  totalProductCount = this.products.length;
  totalProductInStock = this.products.filter( p => p.is_in_inventory === true).length;
  totalProductOutOfStock = this.products.filter( p => p.is_in_inventory === false).length;

  @Input()
  searchText: string = '';

  selectedFilterRadioButton: string = 'all';

  onFilterChanged(value: string) {
    // console.log(value);
    this.selectedFilterRadioButton = value;
  }
  
}
