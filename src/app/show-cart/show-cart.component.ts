import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { product, SharedService } from '../shared.service';

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.scss']
})
export class ShowCartComponent implements OnInit {
  cart: any = [];
  subscription: Subscription = new Subscription();

  constructor(private _service: SharedService) {
    this.subscription = this._service.cartOpened.subscribe((data: product[]) => {
      var cart = data;
      
      /* Get the qty of items */
      cart.forEach((element: any) => {
        this.cart.push({ 
          title: element.title,
          key_price: element.key_price,
          price: element.price,
          rating: element.rating,
          description: element.description,
          image: element.image,
          comments: element.comments,
          platforms: element.platforms,
          qty: cart.filter((v: any) => (v.title === element.title)).length });
      });

      /* Remove duplicate values es6 magic */
      this.cart = this.cart.filter((value: any, index: any, self: any) =>
        index === self.findIndex((t: any) => (
        t.place === value.place && t.title === value.title
        ))
      );
    });
  }

  ngOnInit(): void {
  } 

  /* To be deleted in the final version */
  resetCart() {
    this._service.openCartPage(null);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  totalPrice(qty: number, price: string) {
    return String((qty * parseFloat(price.substring(0, price.length - 3).replace(/,/g, '.')))).replace('.', ',');
  }
}
