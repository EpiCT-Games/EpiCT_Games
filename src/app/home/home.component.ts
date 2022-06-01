import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//import { platform } from 'process';
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
  categories_expanded: boolean = false;
  filtros!:FormGroup;
  plataformas=['Steam','Origin','Epic Games','EA','Battle.net','Playstation','Xbox','Nintendo'];
  products_filtered: product[] = [];

  minValue: number = 0;
  maxValue: number = 999;
  options: Options = {
    floor: 0,
    ceil: 999,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + ' €';
        case LabelType.High:
          return value + ' €';
        default:
          return value + ' €';
      }
    }
  };

  constructor(private _service: SharedService,private _formBuilder: FormBuilder) {    
    this.subscription = this._service.filter.subscribe((data: string) => {
      this.filterValue = data;
      if (this.filterValue !== '') {
        this.products = this._service.getProducts().filter((product: product) => product.title.toLowerCase().includes(this.filterValue.toLowerCase()));
      } else {
        this.products = this._service.getProducts();
      }
    });

    this.filtros = _formBuilder.group({
        'Steam': false,
        'Origin': false,
        'Epic Games': false,
        'EA':false,
        'Battle.net':false,
        'PlayStation':false,
        'Xbox':false,
        'Nintendo':false
    });
  }

   //filter porducts
    onSubmit() {
    
      //get form values and filter set to true
      let formValues = this.filtros.value;
      let filterSet: string[] = [];
      for (let key in formValues) {
        if (formValues[key] === true) {
          filterSet.push(key);
        }
      }
      console.log(filterSet);

      //filter products
      
      this.products_filtered = this.products.filter((product: product) => {
        let found: boolean = false;
        for (let i = 0; i < filterSet.length; i++) {
          //console.log(product.platform);
          if (product.platform.includes(filterSet[i],0)) {
            found = true;
            break;
          }
        }
        return found;
      });
      
      console.log(this.products_filtered);

      // console.log(this.filtros.controls['Steam'].value);
      // console.log(this.filtros.controls['Origin'].value);
      // console.log(this.filtros.controls['Epic Games'].value);
      // console.log(this.filtros.controls['EA'].value);
      // console.log(this.filtros.controls['Battle.net'].value);
      // console.log(this.filtros.controls['PlayStation'].value);
      // console.log(this.filtros.controls['Xbox'].value);
      // console.log(this.filtros.controls['Nintendo'].value);
    }


  ngOnInit(): void {
    this.products = this._service.getProducts();
    this.events = this._service.getEvent();
    console.log(this.products);
  }
}
