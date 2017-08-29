import { Component, OnInit, Input } from '@angular/core';
import { QuestionStructure } from "../models/question-structure";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-dynamic-items',
  templateUrl: './dynamic-items.component.html',
  styleUrls: ['./dynamic-items.component.css']
})
export class DynamicItemsComponent implements OnInit {
  @Input() question: QuestionStructure<any>;
  @Input() form: FormGroup;

  public get isValid() {
    return this.form.controls[this.question.key].valid;
  }
  constructor() { }

  ngOnInit() {
  }

}
