import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student/add-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddStudentComponent,
    ViewStudentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    AddStudentComponent,
    ViewStudentComponent,
   
  ]
})
export class StudentModule { }
