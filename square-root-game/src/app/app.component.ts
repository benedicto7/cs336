import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Square Root Game';

  public target: number = 100;
  public guess: unknown = "";
  public accuracy: number = 1;

  public feedbacks: string[] = [];

  public tries: number = 0;
  public try: string = "";

  public userPlay = true;
  public userRestart = false;

  submit(): void {
    const correctAnswer = Math.sqrt(this.target);
    const guess = Number(this.guess);
    this.tries++;

    // answer is same
    if (guess === correctAnswer) {
      this.feedbacks.push(this.guess + " is correct.");
      this.try = "You got the answer in " + this.tries + " tries.";

      // hides guess input
      this.userPlay = false;

      // shows try again button
      this.userRestart = true;
    }
    // answer is close enough.
    else if (Math.abs(guess - correctAnswer) / correctAnswer <= this.accuracy / 100) {
      this.feedbacks.push(this.guess + " is close enough. Correct answer is " + correctAnswer);
      this.try = "You got to the closest answer in " + this.tries + " tries.";

      // hides guess input
      this.userPlay = false;

      // shows try again button
      this.userRestart = true;
    }
    // guess is too low
    else if (guess < correctAnswer) {
      this.feedbacks.push(this.guess + " guess is too low. Try again.");
    }
    // guess is too high
    else {
      this.feedbacks.push(this.guess + " guess is too high. Try again.");
    }

    // Resets the text in guess input
    this.guess = "";
  }

  // Generate random number between 50 and 250
  randomNumber(): void {
    this.target = Math.floor(Math.random() * 250) + 50;
  }

  // restarts the game
  restart(): void {
    this.userPlay = true;     // shows guess input
    this.userRestart = false; // hides try again button
    this.tries = 0;
    this.try = "";
    this.feedbacks = []

    //this.feedbacks.length = 0;
    //this.feedbacks.splice(0, this.feedbacks.length);
  }
}