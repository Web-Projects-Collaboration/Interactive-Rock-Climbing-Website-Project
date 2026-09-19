import { Routes } from '@angular/router';
import { contact } from '../contact-page/contact';
import { LandingPage } from '../landing-page/landing-page';

export const routes: Routes = [ 
    {path: "contact-page", component: contact}, 
    {path:"", component: LandingPage}
];
