import { Component } from '@angular/core';
import { capitalize } from '@utils';
import { Ui } from '@ui'; // imports ButtonComponent

@Component({
  selector: 'app-root',
  imports: [Ui],
  template: `
    <h1>{{ capitalizedTitle }}</h1>
    <lib-button
      label="Custom Button"
      style="background-color: blue; color: white;"
    ></lib-button>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
    }
  `]
})
export class App {
  protected title = 'Alcomotion';
  capitalizedTitle = capitalize(this.title);
}

