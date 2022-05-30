import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { event,SharedService } from '../shared.service';

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
  open_game() {
    this._router.navigate(['/product']);
    this._service.openProductPage(this.data);
  }

  /* Add the selected item to the shopping cart */
  addCart() {
    this._service.openCartPage(this.data);
  }
}
