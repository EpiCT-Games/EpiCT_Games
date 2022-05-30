import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { product,event, SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() filterValue: any;
  products!: product[];
  events!: event[];
  subscription: Subscription = new Subscription();

  constructor(private _service: SharedService) {    
    this.subscription = this._service.filter.subscribe((data: string) => {
      this.filterValue = data;
      if (this.filterValue !== '') {
        this.products = this._service.getProducts().filter((product: product) => product.title.toLowerCase().includes(this.filterValue.toLowerCase()));
      } else {
        this.products = this._service.getProducts();
      }
    });
  }

  ngOnInit(): void {
    this.products = this._service.getProducts();
    this.events = this._service.getEvent();
    console.log(this.products);
  }
}
