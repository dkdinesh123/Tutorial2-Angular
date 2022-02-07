import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  template: `
    <h2 class="customs">
        Country is India
    </h2>
  `,
  styles: [
    `.customs{
      color:red;
      font-size:xx-large;
    }`
  ]
})
export class CountryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
