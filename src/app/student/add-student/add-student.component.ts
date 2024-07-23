import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Student } from '../../model/student';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent implements OnInit,OnChanges
{
  
  constructor(private fb:FormBuilder,private ss:ServiceService){}

 @Input()
 studentEdit:Student;

 studFlag:boolean=true;

  studentform:FormGroup;
  
  ngOnInit(): void 
  {
    this.studentform=this.fb.group({
      id:[],
      name:[],
      surname:[],
      marks:[],
      class:[],
      division:[]
    })
  }

  onSaveStudent()
  {
    if(this.studFlag)
    {
      this.ss.saveStudentDetails(this.studentform.value).subscribe(
        (student:Student)=>{
          console.log(student)
          if(student!=null)
          {
            this.studentform.reset()
            alert("Student Registered Successfully..!!");
          }
          else
          {
            alert("Please Try Again Something Went Wrong..!!");
          }
        });
      }
        else{
           this.ss.updateStudent(this.studentform.value).subscribe(
            (student:Student)=>{
              if(student!=null)
              {
                this.studentform.reset();
                alert("Student Updated Successfully..!!");
              }
            }
           );
        }
      
    }

  ngOnChanges(changes: SimpleChanges): void 
  {
    if(this.studentform!=null)
    {
      this.studentform.patchValue(this.studentEdit);
      this.studFlag=false;
    }
  }
}
