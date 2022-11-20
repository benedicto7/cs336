import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-survey-card',
  templateUrl: './survey-card.component.html',
  styleUrls: ['./survey-card.component.scss']
})

export class SurveyCardComponent implements OnInit {
  @Input() question: string;
  @Input() subtitle: string;
  @Input() minValue: number;
  @Input() maxValue: number;
  @Input() units: string;

  @Output() result: EventEmitter<object> = new EventEmitter<object>();

  public answer: string = ""; // outputs to the child component

  constructor() { }

  ngOnInit(): void {
  }

  sliderChanged(value: any): void {
    console.log(value);
    this.result.emit(value); // outputs to the parent component
    this.answer = value.value; // outputs to the child component the value object
  }
}
