import { Component } from '@angular/core';
import { navBar } from '../nav-bar/nav-bar';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'

@Component({
  imports: [navBar, ReactiveFormsModule],
  selector: 'user-profile',
  styleUrl: './user-profile.css',
  templateUrl: './user-profile.html',
})

export class UserProfile {
  userLoggedIn = false;

  profileForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })
  
  createUserProfile() {
    console.log(this.profileForm.value);
    this.userLoggedIn = true;
  }

}
