import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-button',
  template: `<button class="btn">{{ label }}</button>`,
  styles: [`
    .btn {
      padding: 0.5rem 1rem;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `]
})
export class ButtonComponent {
  @Input() label = 'Click me';
}
