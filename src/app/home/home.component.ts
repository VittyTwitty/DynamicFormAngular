import { Component, OnInit } from '@angular/core';
import { QuestionService } from "../services/question.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [QuestionService]
})
export class HomeComponent implements OnInit {
  public questions: any[];

  constructor(
    public questionService: QuestionService
  ) {
    this.questions = questionService.getQuestions();
  }

  ngOnInit() {
  }

}
