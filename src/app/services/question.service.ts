import { Injectable } from '@angular/core';
import { QuestionStructure } from "../models/question-structure";
import { SelectQuestion } from "../models/select-question";
import { TextboxQuestion } from "../models/textbox-question";
import { mockData } from "../data/data";
import { ButtonQuestion } from "../models/button-question";

@Injectable()
export class QuestionService {
  public getQuestions() {
    let newArr = [];
    mockData.map((data) => {
      if (data.type2 === 'input') {
        let textbox: QuestionStructure<string>;
        textbox = new TextboxQuestion(data);
        newArr.push(textbox);
        console.log(data)
      }
      else if (data.type2 === 'select') {
        let selectbox: QuestionStructure<string>;
        selectbox = new SelectQuestion(data);
        newArr.push(selectbox);
      }
      else if (data.type2 === 'button') {
        let buttonbox: QuestionStructure<string>;
        buttonbox = new ButtonQuestion(data);
        newArr.push(buttonbox);
      }
      console.log(newArr)
      return newArr;
    })
    let questions: QuestionStructure<any>[] = newArr
    //  [
    // new SelectQuestion({
    //   key: 'country',
    //   label: 'Страна',
    //   options: [
    //     { key: 'uk', value: 'Великая Британия' },
    //     { key: 'ua', value: 'Украина' },
    //     { key: 'germany', value: 'Германия' }
    //   ],
    //   order: 5
    // }),
    // new TextboxQuestion({
    //   key: 'firstName',
    //   label: 'Имя',
    //   type: 'text',
    //   required: true,
    //   placeholder: 'Имя',
    //   order: 1
    // }),
    // new TextboxQuestion({
    //   key: 'emailAdd',
    //   label: 'Email',
    //   type: 'email',
    //   disabled: true,
    //   order: 2
    // })
    // ];
    console.log(mockData)
    return questions.sort((a, b) => a.order - b.order);
  }
  constructor() { }

}
