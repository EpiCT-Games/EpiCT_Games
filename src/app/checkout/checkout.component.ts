import { Country } from '@angular-material-extensions/select-country';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
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
  payment: string = "";
  phone_disable: boolean = true;

  isActive1: boolean = false;
  isActive2: boolean = false;
  isActive3: boolean = false;
  checked1: boolean = false;
  checked2: boolean = false;
  checked3: boolean = false;
 
  constructor(private _formBuilder: FormBuilder, public done_dialog: MatDialog) {}

  ngOnInit() {
    this.infoForm = this._formBuilder.group({
      name: ['', Validators.required],
      country: [''],
      city: ['', Validators.required],
      address: ['', Validators.required],
      post_code: ['', Validators.required],
      nif: [''],
    }, {validator: nifValidator});
    this.paymentForm = this._formBuilder.group({
      payment: ['', Validators.required],
      phone: [''],
    }, {validator: phoneValidator});
  }

  /* Shorthands for form controls (used from within template) */
  get name() { return this.infoForm.get('name') };
  get city() { return this.infoForm.get('city') };
  get address() { return this.infoForm.get('address') };
  get post_code() { return this.infoForm.get('post_code') };
  get nif() { return this.infoForm.get('nif') };
  get phone() { return this.paymentForm.get('phone') };

  /* Update validation when the phone input changes */
  onPhoneInput() {
    if (this.paymentForm.hasError('phoneWrong'))
      this.phone?.setErrors([{'phoneWrong': true}]);
    else
      this.phone?.setErrors(null);
  }

  /* Update validation when the phone input changes */
  onNifInput() {
    if (this.infoForm.hasError('nifWrong'))
      this.nif?.setErrors([{'nifWrong': true}]);
    else
      this.nif?.setErrors(null);
  }

  /* Set the correct checked box and the correct payment info */
  selectPayment(payment: string) {
    this.payment = payment;
    this.paymentForm.get('payment')?.setValue(payment);
    
    if (payment == 'paypal') {
      this.checked1 = true;
      this.checked2 = false;
      this.checked3 = false;
      this.paymentForm.get('phone')?.clearValidators();
    }
    if (payment == 'credit_card') {
      this.checked2 = true;
      this.checked1 = false;
      this.checked3 = false;
      this.paymentForm.get('phone')?.clearValidators();
    }
    if (payment == 'mbway') {
      this.checked3 = true;
      this.checked1 = false;
      this.checked2 = false;
      this.paymentForm.get('phone')?.setValidators(Validators.required);
    }

    this.paymentForm.get('phone')?.updateValueAndValidity();
  }

  checkoutDone() {
    const dialogRef = this.done_dialog.open(DoneComponent, {
      width: '40%'
    });
  }

  onCountryChange(c: Country) {
    console.log(c);
  }
}

export const phoneValidator: ValidatorFn = (formGroup: AbstractControl ): ValidationErrors | null  => {
  var phone: string = formGroup.get('phone')?.value;

  if (phone.length == 0) return null;

  if (phone.length == 9 && !isNaN(Number(phone))) {
    return null;
  } else {
    return { phoneWrong: true };
  }
}

export const nifValidator: ValidatorFn = (formGroup: AbstractControl ): ValidationErrors | null  => {
  var nif: string = formGroup.get('nif')?.value;

  if (nif.length == 0) return null;

  if (nif.length == 9 && !isNaN(Number(nif))) {
    return null;
  } else {
    return { nifWrong: true };
  }
}
