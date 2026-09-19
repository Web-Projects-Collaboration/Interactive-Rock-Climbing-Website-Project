import { Component, signal, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'nav-bar',
  styleUrl: './nav-bar.css',
  templateUrl: './nav-bar.html',
})
export class navBar {
  protected readonly title = signal('frontend');
  private router = inject(Router);


  navigateToContact () {
    this.router.navigate(["/contact-page"]);
  };
  navigateToLandingPage() {
    this.router.navigate(["/"]);
  }
}

