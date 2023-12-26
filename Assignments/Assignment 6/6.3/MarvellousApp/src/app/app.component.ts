import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  // templateUrl: './app.component.html',
  template: `
    <div>
      <h1 class="colorBlue">Marvellous Infosystems</h1>
    </div>
  `,
  // styleUrl: './app.component.css'
  styles: `
    .colorBlue {
    color: blue;
    }
  `
})
export class AppComponent {
  title = 'MarvellousApp';
}
