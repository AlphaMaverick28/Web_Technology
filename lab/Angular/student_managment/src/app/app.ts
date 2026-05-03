import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home';
import { AddstudentComponent } from '../addstudent/addstudent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, AddstudentComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('student_managment');
}
