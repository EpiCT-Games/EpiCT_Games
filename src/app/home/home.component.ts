import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tiles: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

  constructor() { }

  ngOnInit(): void {
  }

}
