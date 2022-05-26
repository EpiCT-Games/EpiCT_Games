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
      console.log(data);
      
      /* Get the qty of items */
      cart.forEach((element: any) => {
        element.qty = cart.filter((v: any) => (v.name === element.name)).length;
        this.cart.push(element);
      });
      
      /* Remove duplicate values es6 magic */
      this.cart = this.cart.filter((value: any, index: any, self: any) =>
        index === self.findIndex((t: any) => (
        t.place === value.place && t.name === value.name
        ))
      );

      //console.log(this.cart);
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
