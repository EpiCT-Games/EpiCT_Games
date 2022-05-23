import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { product, SharedService } from '../shared.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.scss']
})
export class ShowProductComponent implements OnInit {
  product: product | null = null;
  subscription: Subscription = new Subscription();
  
  constructor(private _service: SharedService) {
    this.subscription = this._service.productOpened.subscribe((data: product) => {
      this.product = data;
    });
  }

  ngOnInit(): void {
    console.log(this.product);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
