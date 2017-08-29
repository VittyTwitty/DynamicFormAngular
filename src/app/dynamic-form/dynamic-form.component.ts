import { Component, OnInit, Input } from '@angular/core';
import { QuestionControlService } from "../services/question-control.service";
import { QuestionStructure } from "../models/question-structure";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionStructure<any>[] = [];
  public form: FormGroup;
  public payLoad = '';

  constructor(
    private questionControlService: QuestionControlService
  ) { }

  ngOnInit() {
    this.form = this.questionControlService.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
