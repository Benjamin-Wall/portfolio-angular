import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  changeAccentColor() {
    const r = Math.floor(Math.random() * 256),
      g = Math.floor(Math.random() * 256),
      b = Math.floor(Math.random() * 256);

    const newColor = `${r}, ${g}, ${b}`;

    document.documentElement.style.setProperty('--accent-color', newColor);
  }
}
