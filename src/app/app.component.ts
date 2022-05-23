import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EpiCT_Games';
  cart_number = 0;
  subscription: Subscription = new Subscription();

  constructor(private _router: Router, private _service: SharedService) {}

  ngOnInit() {
    this.subscription = this._service.cartOpened.subscribe((data: any) => {
      this.cart_number = data.length;
    });
  }

  redirectHome() {
    this._router.navigate(['/home']);
  }

  redirectCart() {
    this._service.openCartPage(null);
  }
}
