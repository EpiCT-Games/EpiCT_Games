import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { event, product, SharedService } from '../shared.service';
import * as _moment from 'moment';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
const moment = _moment;

export const DATE_FORMAT = {
  parse: {
      dateInput: ['DD-MM-YYYY', 'DD/MM/YYYY']
  },
  display: {
      dateInput: 'DD-MM-YYYY',
      monthYearLabel: 'YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'YYYY'
  }
};
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT },
  ]
})
export class CreateEventComponent implements OnInit {
  form: FormGroup;
  

  jogos!: product[];
  constructor(private _service: SharedService, private _form: FormBuilder) {
    //get products
    
    this.form=_form.group({
        nome: new FormControl('', [Validators.required]),
        localizacao: new FormControl('', [Validators.required]),
        data: new FormControl('', [Validators.required]),
        hora: new FormControl('', [Validators.required]),
        descricao: new FormControl('', [Validators.required]),
        preço: new FormControl('', [Validators.required]),
        imagem: new FormControl('', [Validators.required]),
        jogo: new FormControl('', [Validators.required]),
      });
   }

  ngOnInit(): void {
    this.jogos = this._service.getProducts();

  }
  submit() {
    console.log(this.form.value);
    var event:event;
    event = {
      title: this.form.value.nome,
      location: this.form.value.localizacao,
      start_date: this.form.value.data,
      hour: this.form.value.hora,
      description: this.form.value.descricao,
      price: this.form.value.preço,
      game: this.form.value.jogo,
    }

    this._service.addEvent(event);
    console.log(this._service.getEvent());
    this.form.reset();
    
  }
}
