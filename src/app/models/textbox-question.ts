import { QuestionStructure } from "./question-structure";

export class TextboxQuestion extends QuestionStructure<string>{
    controlType = 'textbox';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}
