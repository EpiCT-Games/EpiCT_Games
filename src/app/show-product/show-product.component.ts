import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { product, SharedService } from '../shared.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.scss']
})
export class ShowProductComponent implements OnInit {
  product : product | null = null;
  subscription : Subscription = new Subscription();
  rateInt : number[] = [];
  rateDouble : number = 0;
  
  constructor(private _service: SharedService) {
    this.subscription = this._service.productOpened.subscribe((data: product) => {
      this.product = data;
    });
    
  }

  ngOnInit(): void {
    console.log(this.product);
    this.calculateRate();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  calculateRate(){
    this.rateInt = Array(Math.floor(Number(this.product?.rating))).fill(Math.floor(Number(this.product?.rating))); // [4,4,4,4,4]
    console.log(this.rateInt);
    this.rateDouble = Number(this.product?.rating) - this.rateInt.length;
    console.log(this.rateDouble);
  }
}
