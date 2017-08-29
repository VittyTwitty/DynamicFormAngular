import { Injectable } from '@angular/core';
import { QuestionStructure } from "../models/question-structure";
import { FormControl, Validators, FormGroup } from "@angular/forms";

@Injectable()
export class QuestionControlService {

  constructor() { }

  public toFormGroup(question: QuestionStructure<any>[]) {
    let group: any = {};

    question.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }

}
