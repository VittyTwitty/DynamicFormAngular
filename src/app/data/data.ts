import { TextboxQuestion } from "../models/textbox-question";
import { SelectQuestion } from "../models/select-question";
import { QuestionStructure } from "../models/question-structure";

export const mockData = [
    {
        key: 'firstName',
        label: 'Имя',
        type: 'text',
        required: true,
        placeholder: 'Имя',
        order: 1,
        type2: 'input'
    },
    {
        key: 'emailAdd',
        label: 'Email',
        type: 'email',
        disabled: true,
        order: 2,
        type2: 'input'
    },
    {
        key: 'brave',
        label: 'Bravery Rating',
        options: [
            { key: 'solid', value: 'Solid' },
            { key: 'great', value: 'Great' },
            { key: 'good', value: 'Good' },
            { key: 'unproven', value: 'Unproven' }
        ],
        order: 3,
        type2: 'select'
    }
];
