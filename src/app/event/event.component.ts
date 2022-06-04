import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { event,product,SharedService } from '../shared.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input() data: any;
  
  isActive1 = false;

  constructor(private _router: Router, private _service: SharedService) { }

  ngOnInit(): void {

  }
  /* Open the page with the product details */
  open_event() {
    this._router.navigate(['/product']);  // change navigation to future page of "/event"
    this._service.openProductPage(this.data);
  }

  /* Add the selected item to the shopping cart */
  addCart() {
    var event_product: any = {
      title: this.data.title,
      key_price: this.data.price,
      price: null,
      image: this.data.img,
      rating: 0,
      description: "",
      comments: [],
      categories: [""],
      platform: [""],
      pegi: ""
    }
    
    event_product.type = 'ticket';
    console.log(event_product);
    this._service.openCartPage(event_product);
  }
}
