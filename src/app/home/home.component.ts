import { Component, OnInit } from '@angular/core';
import { product, SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: product[];

  constructor(private _service: SharedService) {
    this.products = this._service.getProducts();
    console.log(this.products);
  }

  ngOnInit(): void {
  }
}
