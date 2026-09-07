import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { navBar } from '../nav-bar/nav-bar';

@Component({
  imports: [RouterOutlet, navBar],
  selector: 'contact-page',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class contact {
  protected readonly title = signal('frontend');
}