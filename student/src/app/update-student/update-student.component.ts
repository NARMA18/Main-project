import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../create-student/student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent {
  id: number ;
  student:Student = new Student();
  constructor(private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe(data =>{
      this.student=data;
    },error =>console.log(error));
  }

  addStudent(){
    this.studentService.updateStudent(this.id,this.student).subscribe(data =>{
      this.goToStudentList();
    },error=>console.log(error));
  }

  goToStudentList(){
    this.router.navigate(['/student']);

  }
}

