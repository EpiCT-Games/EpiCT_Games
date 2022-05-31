import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DoneComponent } from './done/done.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class CheckoutComponent implements OnInit {
  infoForm!: FormGroup;
  paymentForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder, public done_dialog: MatDialog) {}

  ngOnInit() {
    this.infoForm = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.paymentForm = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  checkoutDone() {
    const dialogRef = this.done_dialog.open(DoneComponent, {
      width: '40%'
    });
  }
}
