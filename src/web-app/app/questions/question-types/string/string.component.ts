import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../question';
import { Data } from '../../../shared/providers/data.provider';
import { QuestionService } from '../../questions.service';

@Component({
  selector: 'app-question-type-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.css']
})
export class StringComponent implements OnInit {
  @Input() question: Question;
  @Output('answer')
  outputAnswer: EventEmitter<object> = new EventEmitter<object>();

  answer: string;
  constructor(private questionService: QuestionService) {}

  ngOnInit() {
  }

  infoClicked(event) {
    let yPos = (event.currentTarget.getBoundingClientRect().y) + 50;
    let infoText = event.currentTarget.parentElement.nextSibling;
    infoText.classList.toggle('info-active');
    infoText.style.top = "infoText";
  }

  sendAnswer() {
    const value = { question_id: this.question.id, answer: this.answer };
    this.outputAnswer.emit(value);
    this.questionService.addToLocalStorage(value);
  }
}
