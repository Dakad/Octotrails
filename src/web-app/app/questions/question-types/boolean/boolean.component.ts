import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../question';
import { Data } from '../../../shared/providers/data.provider';

@Component({
  selector: 'app-question-type-boolean',
  templateUrl: './boolean.component.html',
  styleUrls: ['./boolean.component.css']
})
export class BooleanComponent implements OnInit {
  activeButton = null;
  @Input() question: Question;
  @Output('answer')
  outputAnswer: EventEmitter<object> = new EventEmitter<object>();
  answer: boolean;

  constructor() {}

  ngOnInit() {}

  buttonClicked(event) {
    if (this.activeButton !== event.currentTarget) {
      if (this.activeButton !== null) {
        this.activeButton.classList.remove('active');
      }
      this.activeButton = event.currentTarget;
      event.currentTarget.classList.add('active');
      this.answer = this.activeButton.value;
      this.sendAnswer();
    } else {
      this.activeButton.classList.remove('active');
      this.activeButton = null;
      this.answer = this.activeButton.value;
      this.sendAnswer();
    }
  }

  sendAnswer() {
    const value = { question_id: this.question.id, answer: this.answer };
    this.outputAnswer.emit(value);
  }
}
