import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { product, SharedService } from '../shared.service';

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.scss']
})
export class ShowCartComponent implements OnInit {
  cart: any = [];
  cart_subscription: any = [];
  subscription: Subscription = new Subscription();

  constructor(private _service: SharedService, private _router: Router) {
    this.subscription = this._service.cartOpened.subscribe((data: product[]) => {
      var cart = data;
      this.cart_subscription = data;

      /* Get the qty of items */
      cart.forEach((element: any) => {        
        this.cart.push({ 
          title: element.title,
          key_price: element.key_price,
          price: element.price,
          rating: element.rating,
          description: element.description,
          image: element.image,
          type: element.type,
          comments: element.comments,
          platforms: element.platforms,
          qty: cart.filter((v: any) => (v.title === element.title && v.type === element.type)).length
        });

      });

      /* Remove duplicate values es6 magic */
      this.cart = this.cart.filter((value: any, index: any, self: any) =>
        index === self.findIndex((t: any) => (
        t.place === value.place && t.title === value.title && t.type === value.type
        ))
      );
    });
  }

  ngOnInit(): void {
  } 

  /* To be deleted in the final version */
  resetCart() {
    this._service.openCartPage(null);

    /* Reload the current component */
    let currentUrl = this._router.url;
    this._router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this._router.navigate([currentUrl]);
    });
  }

  removeItem(product: any) {
    this.cart_subscription.splice(this.cart_subscription.findIndex((p: any) => p.title == product.title && p.type == product.type), 1);
    
    this._service.updateCartPage(this.cart_subscription);

    /* Reload the current component */
    let currentUrl = this._router.url;
    this._router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this._router.navigate([currentUrl]);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  totalPriceProduct(qty: number, price: string) {
    return String((qty * parseFloat(price.substring(0, price.length - 3).replace(/,/g, '.'))).toFixed(2)).replace('.', ',');
  }

  totalPriceCart() {
    var total = 0;
    this.cart.forEach((element: any) => {
      if (element.type == 'key') {
        total += element.qty * parseFloat(element.key_price.substring(0, element.key_price.length - 3).replace(/,/g, '.'));
      } else {
        total += element.qty * parseFloat(element.price.substring(0, element.price.length - 3).replace(/,/g, '.'));
      }
    });
    return String(total.toFixed(2)).replace('.', ',');
  }
}
