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
        key: 'emailAdd',
        label: 'sdsdsdsd',
        type: 'email',
        disabled: true,
        order: 6,
        type2: 'input'
    },
    {
        key: 'buttonSubmit',
        label: 'sdsdsdsd',
        value: 'Отправить',
        type: 'submit',
        disabled: true,
        order: 8,
        type2: 'button'
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
    },
    {
        key: 'brave',
        label: '111111111111111111111111111111111111111',
        options: [
            { key: 'solid', value: 'Solid' },
            { key: 'great', value: 'Great' },
            { key: 'good', value: 'Good' },
            { key: 'unproven', value: 'Andrey loh' }
        ],
        order: 3,
        type2: 'select'
    }
];
