import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { event, SharedService } from '../shared.service';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.scss']
})
export class ShowEventComponent implements OnInit {
  subscription: Subscription;
  event?: event;

  constructor(/*import shared service*/ 
    private _service: SharedService) {
    this.subscription = this._service.eventOpened.subscribe((data: event) => {
      this.event = data;
    });
  }
  

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }

  

}
