import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';


export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },

  {
    path: 'resume',
    component: ResumeComponent
  },

  {
    path: 'about-me',
    component: AboutMeComponent
  },

  {
    path: '**',
    redirectTo: '/'
  }
]
