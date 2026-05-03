import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home';
import { AddstudentComponent } from '../addstudent/addstudent';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: AddstudentComponent }
];