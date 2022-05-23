import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface product {
  title: string,
  key_price: string,
  price: string | null,
  rating: number,
  description: string,
  image: any,
  comments: string[],
  platforms: string[]
}

export interface event {
  title: string,
  location: string,
  game: string,
  start_date: string,
  end_date: string,
  price: string,
}

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  /* Initialize the product information */
  private productSource = new BehaviorSubject<product>(JSON.parse(localStorage.getItem('product-page')!));
  productOpened = this.productSource.asObservable();

  /* Initialize the event information */
  private eventSource = new BehaviorSubject<event>(JSON.parse(localStorage.getItem('event-page')!));
  eventOpened = this.eventSource.asObservable();

  /* Initialize the cart_details information */
  private cartSource = new BehaviorSubject<any>(localStorage.getItem('cart-page') ? JSON.parse(localStorage.getItem('cart-page')!) : JSON.parse('[]'));
  cartOpened = this.cartSource.asObservable();

  products: any[] = [
    {
      title: 'Rocket League',
      key_price: '9,90 €',
      price: '11,90 €',
      rating: 4.5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: null,
      comments: ['1', '2'],
      platform: ['Steam', 'Origin', 'Xbox', 'Playstation']
    },
    {
      title: 'Fortnite',
      key_price: '2,90 €',
      price: null,
      rating: 3.5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: null,
      comments: ['1', '2'],
      platform: ['Epic Games', 'Xbox', 'Playstation']
    },
    {
      title: 'Overwatch',
      key_price: '29,90 €',
      price: '35,90 €',
      rating: 4.2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: null,
      comments: ['1', '2'],
      platform: ['Battle.net', 'Steam', 'Playstation']
    },
    {
      title: 'FIFA 2022',
      key_price: '12,99 €',
      price: null,
      rating: 4.7,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: null,
      comments: ['1', '2'],
      platform: ['EA', 'Steam', 'Playstation']
    }
  ];

  events: event[] = [
    {
      title: 'DreamHack Masters Stockholm',
      location: 'Stockholm, Sweden',
      game: 'CS:GO',
      start_date: '2022-06-01',
      end_date: '2022-06-02',
      price: '100,00 €'
    }
  ]

  constructor() { }

  getProducts() {
    if (localStorage.getItem('products') == null) {
      localStorage.setItem('products', JSON.stringify(this.products));
    }

    if (JSON.parse(localStorage.getItem('products')!) != this.products) {
      localStorage.setItem('products', JSON.stringify(this.products));
    }
    
    return JSON.parse(localStorage.getItem('products')!);
  }

  getEvent() {
    if (localStorage.getItem('events') == null) {
      localStorage.setItem('events', JSON.stringify(this.events));
    }

    if (JSON.parse(localStorage.getItem('events')!) != this.events) {
      localStorage.setItem('events', JSON.stringify(this.events));
    }
    
    return JSON.parse(localStorage.getItem('events')!);
  }

  addEvent(event: event) {
    this.events.push(event);
    localStorage.setItem('events', JSON.stringify(this.events));
  }

  /* Change the opened product page information */
  openProductPage(product: product) {
    this.productSource.next(product);
    localStorage.setItem('product-page', JSON.stringify(product));
  }

  /* Change the opened event page information */
  openEventPage(event: event) {
    this.eventSource.next(event);
    localStorage.setItem('event-page', JSON.stringify(event));
  }

  /* Change the opened cart page information */
  openCartPage(cart: any) {
    if (cart == null) {
      this.cartSource.next([]);
      localStorage.setItem('cart-page', JSON.stringify([]));
    } else {
      var new_cart = JSON.parse(localStorage.getItem('cart-page')!);
      new_cart.push(cart);
      
      this.cartSource.next(new_cart);
      localStorage.setItem('cart-page', JSON.stringify(new_cart));
    }
  }
}
