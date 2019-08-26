import { Component, Input, OnInit} from '@angular/core';
import { QuestionsService } from './page/question/questions.service';
@Component({
  selector: 'inline-demo',
  template: `<h1>Inlline Component {{name}}!</h1>
  
  <div *ngFor="let question of questions">
    <p><strong>Questions: {{question.question}}</strong></p>
    <p><strong>Answer: {{question.answer}} </strong></p>
    <hr>
  </div>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class InlineComponent {
  @Input() name: string;
  questions;
  constructor(private questionService: QuestionsService){
    this.questions=this.questionService.getQuestions();
  }


  ngOnInit(){}
}
