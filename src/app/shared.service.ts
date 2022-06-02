import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface product {
  title: string,
  key_price: string,
  price: string | null,
  rating: number,
  description: string,
  image: any,
  comments: any[],
  platform: string[]
}

export interface event {
  title: string,
  location: string,
  img?: any,
  game: string,
  start_date?: string,
  end_date?: string,
  hour?: string,
  description?: string,
  price: string,
}

export interface comment {
  id: number,
  fname: string,
  lname: string,
  comment: string,
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
  private cartSource = new BehaviorSubject<any>(localStorage.getItem('cart-page') ? JSON.parse('[]') : JSON.parse(localStorage.getItem('cart-page')!));
  cartOpened = this.cartSource.asObservable();

  /* Initialize the cart_details information */
  private filterSource = new BehaviorSubject<any>(localStorage.getItem('filter') ? localStorage.getItem('filter') : '');
  filter = this.filterSource.asObservable();

  products: any[] = [
    {
      title: 'Rocket League',
      key_price: '9,90 €',
      price: '11,90 €',
      rating: 4.5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: '/assets/img/products/rocket_league.jpeg',
      comments: ['1', '2'],
      platform: ['Steam', 'Origin', 'Xbox', 'Playstation']
    },
    {
      title: 'Fortnite',
      key_price: '2,90 €',
      price: null,
      rating: 3.5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: '/assets/img/products/fortnite.jpeg',
      comments: ['1', '2'],
      platform: ['Epic Games', 'Xbox', 'Playstation']
    },
    {
      title: 'Overwatch',
      key_price: '29,90 €',
      price: '35,90 €',
      rating: 4.2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: '/assets/img/products/overwatch.jpeg',
      comments: ['1', '2'],
      platform: ['Battle.net', 'Steam', 'Playstation']
    },
    {
      title: 'FIFA 22',
      key_price: '12,99 €',
      price: null,
      rating: 4.7,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: '/assets/img/products/fifa22.jpeg',
      comments: ['1', '2'],
      platform: ['EA', 'Steam', 'Playstation']
    },
    {
      title: 'Minecraft Java Edition',
      key_price: '19,90 €',
      price: '19,90 €',
      rating: 4.9,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: '/assets/img/products/minecraft.jpeg',
      comments: ['1', '2'],
      platform: ['Steam', 'PC']
    },
    {
      title: 'No Man\'s sky',
      key_price: '15,90 €',
      price: '16,90 €',
      rating: 3.8,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: '/assets/img/products/no_mans_sky.jpeg',
      comments: ['1', '2'],
      platform: ['Steam', 'PC']
    },
    {
      title: 'The Witcher III',
      key_price: '19,90 €',
      price: '20,90 €',
      rating: 4.5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: '/assets/img/products/witcher3.jpeg',
      comments: ['1', '2'],
      platform: ['Steam', 'PC', 'Playstation', 'Xbox']
    },
    {
      title: 'LEGO Star Wars',
      key_price: '12,99 €',
      price: '16,90 €',
      rating: 3.2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: '/assets/img/products/lego_starwars.jpeg',
      comments: ['1', '2'],
      platform: ['Steam', 'PC', 'Playstation', 'Xbox']
    },
    {
      title: 'Super Smash Bros',
      key_price: '32,99 €',
      price: '39,99 €',
      rating: 4.1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: '/assets/img/products/super_smash_bros_ultimate.jpeg',
      comments: ['1', '2'],
      platform: ['Nintendo Switch']
    },
    {
      title: 'Surviving Mars',
      key_price: '4,99 €',
      price: '6,99 €',
      rating: 3.0,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: '/assets/img/products/surviving_mars.jpeg',
      comments: ['1', '2'],
      platform: ['Steam', 'PC']
    },
    {
      title: 'Dead by Daylight',
      key_price: '6,99 €',
      price: '15,99 €',
      rating: 4.4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: '/assets/img/products/dead_by_daylight.jpeg',
      comments: ['1', '2', '3'],
      platform: ['PC', 'Playstation', 'Xbox']
    },
    {
      title: 'Cyberpunk 2077',
      key_price: '15,90 €',
      price: '48,99 €',
      rating: 2.1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: '/assets/img/products/cyberpunk.jpg',
      comments: ['1'],
      platform: ['PC', 'Playstation', 'Xbox']
    },
    {
      title: 'Monster Hunter Rise',
      key_price: '15,90 €',
      price: '20,99 €',
      rating: 3.3,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: '/assets/img/products/monster_hunter_rise.jpg',
      comments: ['1'],
      platform: ['PC', 'Nintendo Switch']
    },
    {
      title: 'Genshin Impact',
      key_price: '20,90 €',
      price: '34,99 €',
      rating: 4.3,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: '/assets/img/products/genshin_impact.jpeg',
      comments: ['1', '2'],
      platform: ['PC', 'Playstation', 'Xbox']
    }
  ];

  events: event[] = [
    {
      title: 'DreamHack Masters Stockholm',
      location: 'Estocolmo, Suécia',
      game: 'Counter-Strike: Global Offensive',
      start_date: '2022-06-01',
      end_date: '2022-06-02',
      price: '250,00 €',
      img: '/assets/img/events/dreamhack.jpg',
    },

    {
      title: 'Liga Portuguesa: League of Legends',
      location: 'Lisboa, Portugal',
      game: 'League of Legends',
      start_date: '2022-07-07',
      end_date: '2022-07-09',
      price: '15,00 €',
      // change image here 
      img: '/assets/img/events/dreamhack.jpg',
    },

    {
      title: 'Rocket League Championship Series',
      location: 'Dalas, EUA',
      game: 'Rocket League',
      start_date: '2022-10-20',
      end_date: '2022-10-25',
      price: '120,00 €',
      // change image here 
      img: '/assets/img/events/dreamhack.jpg',
    },

    {
      title: 'IEM Rio Major 2022',
      location: 'Rio de Janeiro, Brasil',
      game: 'Counter Strike: Global Offensive',
      start_date: '2022-10-31',
      end_date: '2022-11-13',
      price: '150,00 €',
      // change image here 
      img: '/assets/img/events/dreamhack.jpg',
      hour:'18:00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

    }
  ]

  constructor() { }

  getProducts() {
    if (localStorage.getItem('products') == null) {
      localStorage.setItem('products', JSON.stringify(this.products));
    }

    if (JSON.parse(localStorage.getItem('products')!) != this.products) {
      this.products = JSON.parse(localStorage.getItem('products')!);
    }
    
    return JSON.parse(localStorage.getItem('products')!);
  }

  getEvent() {
    if (localStorage.getItem('events') == null) {
      localStorage.setItem('events', JSON.stringify(this.events));
    }

    if (JSON.parse(localStorage.getItem('events')!) != this.events) {
      localStorage.setItem('events', localStorage.getItem('events')!);
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
      var new_cart = JSON.parse(localStorage.getItem('cart-page')!) == null ? [] : JSON.parse(localStorage.getItem('cart-page')!);
      console.log(new_cart);

      new_cart.push(cart);

      this.cartSource.next(new_cart);
      localStorage.setItem('cart-page', JSON.stringify(new_cart));
    }
  }

  /* Update the opened cart page information */
  updateCartPage(cart: any) {
    this.cartSource.next([]);
    localStorage.setItem('cart-page', JSON.stringify([]));

    cart.forEach((element: any) => {
      var new_cart = JSON.parse(localStorage.getItem('cart-page')!);
      new_cart.push(element);

      this.cartSource.next(new_cart);
      localStorage.setItem('cart-page', JSON.stringify(new_cart));
    });
  }
  
  /* Change the filter value */
  setFilter(filter: string) {
    this.filterSource.next(filter);
    localStorage.setItem('filter', filter);
  }
}
