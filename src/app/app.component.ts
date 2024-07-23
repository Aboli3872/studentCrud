import { Component } from '@angular/core';
import { Student } from './model/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'studentCrud';

  studentData:Student;

  editStudent(stud:any)
  {
  this.studentData=stud;
  }
}
