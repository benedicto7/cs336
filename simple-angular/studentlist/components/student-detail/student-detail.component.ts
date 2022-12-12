import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudentInfo } from 'src/app/app.component';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {
  @Input('student') student: StudentInfo;
  @Output() gradeToEmit: EventEmitter<string> = new EventEmitter<string>();

  public grade = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClose(): void {
    console.log('emitting grade: ', this.grade);
    this.gradeToEmit.emit(this.grade);
    this.student = null;
  }

}
