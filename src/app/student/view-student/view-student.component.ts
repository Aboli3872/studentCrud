import { Component, EventEmitter, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Student } from '../../model/student';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrl: './view-student.component.css'
})
export class ViewStudentComponent implements OnInit
{
  constructor(private ss:ServiceService){}

  stud:Student[];

  edit:EventEmitter<Student>=new EventEmitter();

  ngOnInit(): void 
  {
    this.ss.getStudentDetails().subscribe((data:Student[])=>{this.stud=data});
  }

  onEdit(stud:Student)
  {
    alert("in edit");
    this.edit.emit(stud);
  }

  onDelete(id:string)
  {
    this.ss.deleteStudent(id).subscribe();
    alert("Student Data Deleted");
    window.location.reload();
  }
}
