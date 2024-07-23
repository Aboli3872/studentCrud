import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../model/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService 
{

  constructor(private http:HttpClient) { }

  saveStudentDetails(stu:Student)
  {
   return this.http.post('http://localhost:3000/student',stu);
  }

  getStudentDetails()
  {
    return this.http.get('http://localhost:3000/student');
  }

  updateStudent(stud:Student)
  {
    return this.http.put('http://localhost:3000/student/'+stud.id ,stud);
  }

  deleteStudent(id:string)
  {
    return this.http.delete(`http://localhost:3000/student/${id}`);
  }
}
