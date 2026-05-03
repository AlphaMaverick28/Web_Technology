import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  imports: [FormsModule, RouterLink],
  templateUrl: './addstudent.html',
  styleUrls: ['./addstudent.css']
})
export class AddstudentComponent {

  student = {
    name: '',
    age: '',
    course: ''
  };

  addStudent() {
    let students = JSON.parse(localStorage.getItem('students') || '[]');
    students.push(this.student);
    localStorage.setItem('students', JSON.stringify(students));

    alert('Student Added Successfully');

    this.student = { name: '', age: '', course: '' };
  }
}
