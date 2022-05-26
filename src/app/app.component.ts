import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  filterValue: string = '';
  title: string = 'EpiCT_Games';
  cart_number: number = 0;
  subscription: Subscription = new Subscription();

  constructor(private _router: Router, private _service: SharedService, public dialog: MatDialog) {}

  ngOnInit() {
    this.subscription = this._service.cartOpened.subscribe((data: any) => {
      this.cart_number = data.length;
    });
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this._service.setFilter(this.filterValue);
  }

  /* Redirect to the home page */
  redirectHome() {
    this._router.navigate(['/home']);
  }

  /* Redirect to the shopping cart page */
  redirectCart() {
    this._router.navigate(['/cart']);
  }

  /* Open Login Dialog */
  redirectLogin() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '20%'
    });
  }

  /* Open Register Dialog */
  redirectRegister() {
    const dialogRef = this.dialog.open(RegisterComponent);
  }
}
