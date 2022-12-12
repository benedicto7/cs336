import { Component } from '@angular/core';

export  interface StudentInfo {
  name: string;
  id: number;
  major: string;
  grade?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public studentList: StudentInfo[] = [
      {
        name: 'David Heynen',
        id: 1234567,
        major: 'CS',
      },
      {
        name: 'Clare Schellenberg',
        id: 23456789,
        major: 'Digital Communications',
      },
      {
        name: 'Sharon Velpula',
        id: 9876543,
        major: 'Computer Science',
      }
  ];

  public selectedStudent: StudentInfo;

  constructor() {
  }

  selectStudent(student: StudentInfo): void {
    this.selectedStudent = student;
  }

  recordGrade(grade: string): void {
    this.selectedStudent.grade = grade;
  }


}
