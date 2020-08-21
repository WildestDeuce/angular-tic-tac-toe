import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      {{ random }}
    </p>
  `,
  styles: [
  ]
})
export class SquareComponent {

random = Math.random();

}
