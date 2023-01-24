import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from './student';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
student:Student=new Student();


  constructor(private studentService:StudentService,
    private router:Router){ }
      ngOnInit(){
      
      }
      saveStudent(){
        this.studentService.createStudent(this.student).subscribe(data=>{
          console.log(data);
          this.goToStudentList();
        },
        error=>console.log(error));

      }
      goToStudentList(){
        this.router.navigate(['/student']);

      }

      addStudent(){
        console.log(this.student);
        this.saveStudent();
      }
  }


