import { QuestionStructure } from "./question-structure";

export class ButtonQuestion extends QuestionStructure<string>{
    controlType = 'button';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}
