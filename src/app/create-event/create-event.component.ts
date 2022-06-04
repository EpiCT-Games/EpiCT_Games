import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { event, product, SharedService } from '../shared.service';
import * as _moment from 'moment';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatDialogRef } from '@angular/material/dialog';
import { map, Observable, startWith } from 'rxjs';
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
  filteredOptions2?: Observable<product[]>;


  jogos!: product[];
  constructor(private _service: SharedService, private _form: FormBuilder, public dialog: MatDialogRef<CreateEventComponent>) {
    //get products
    
    this.form=_form.group({
        nome: new FormControl('', [Validators.required]),
        localizacao: new FormControl('', [Validators.required]),
        dataI: new FormControl('', [Validators.required]),
        dataF: new FormControl('', [Validators.required]),
        hora: new FormControl('', [Validators.required,Validators.pattern('^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$')]),
        descricao: new FormControl('', [Validators.required]),
        preço: new FormControl('', [Validators.required,Validators.pattern('^[0-9]+(\.[0-9]{1,2})?€')]),
        imagem: new FormControl('', [Validators.required]),
        jogo: new FormControl('', [Validators.required]),
      });
   }

  ngOnInit(): void {
    this.jogos = this._service.getProducts();
    this.filteredOptions2 = this.form.valueChanges.pipe(//categorias
      startWith(''),
      map(value => this._filter2(value)),
    );
  }

  submit() {
    console.log(this.form.value);
    var event:event;
    event = {
      title: this.form.value.nome,
      location: this.form.value.localizacao,
      start_date: moment(this.form.value.dataI).format('DD-MM-YYYY'),
      end_date: moment(this.form.value.dataF).format('DD-MM-YYYY'),
      hour: this.form.value.hora,
      description: this.form.value.descricao,
      price: this.form.value.preço,
      game: this.form.value.jogo,
    }

    this._service.addEvent(event);
    
    this.dialog.close();
  }

  get jogo() { return this.form.get('jogo'); }
  get nome() { return this.form.get('nome'); }
  get localizacao() { return this.form.get('localizacao'); }
  get dataI() { return this.form.get('dataI'); }
  get dataF() { return this.form.get('dataF'); }
  get hora() { return this.form.get('hora'); }
  get descricao() { return this.form.get('descricao'); }
  get preco() { return this.form.get('preço'); }
  get imagem() { return this.form.get('imagem'); }

  private _filter2(value: any): product[] {
    if (value.jogo == undefined) return this.jogos;

    const filterValue2 = value?.jogo?.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")

    return this.jogos.filter(option => option.title.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").includes(filterValue2));
  }
  
  onGameInput() {
    if (this.form.hasError('categoryWrong')) {
      this.jogo?.setErrors([{'categoryWrong': true}]);
    } else {
      this.jogo?.setErrors(null);
      var a = this.jogos.findIndex(x => x.title.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "") == this.jogo?.value.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""));
      this.form.get('jogo')?.setValue(this.jogos[a].title);
    }

    //falta fazer costum error verifier
  }

  applyGame(){

  }

}