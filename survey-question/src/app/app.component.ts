import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'survey-question';

  public question1 = "How old are you?";
  public subtitle1 = "Choose between 0 and 100."
  public minValue1 = 0;
  public maxValue1 = 100;
  public units1 = "years";

  public question2 = "How heavy are you?";
  public subtitle2 = "Choose between 0kg and 150kg."
  public minValue2 = 0;
  public maxValue2 = 150;
  public units2 = "kg";

  public question3 = "How tall are you?";
  public subtitle3 = "Choose between 0cm and 300cm."
  public minValue3 = 0;
  public maxValue3 = 300;
  public units3 = "cm";

  gotResult(result: any): void {
    console.log(result);
  }
}
