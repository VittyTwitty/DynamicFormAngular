import { QuestionStructure } from "./question-structure";

export class SelectQuestion extends QuestionStructure<string>{
    controlType = 'select';
    options: {
        key: string,
        value: string
    }[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}
