import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { navBar } from '../nav-bar/nav-bar';

@Component({
  imports: [RouterOutlet, navBar], 
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('frontend');
}
