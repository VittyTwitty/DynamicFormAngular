export class QuestionStructure<T> {
    value: T;
    key: string;
    label: string;
    placeholder: string;
    required: boolean;
    disabled: boolean;
    order: number;
    controlType: string;

    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        placeholder?: string,
        required?: boolean,
        disabled?: boolean,
        order?: number,
        controlType?: string,
    } = {}) {
        this.value = options.value;
        this.key= options.key || '';
        this.label= options.label || '';
        this.placeholder = options.placeholder || '';
        this.required=  !!options.required;
        this.disabled= !!options.disabled;
        this.order= options.order === undefined ? 1 : options.order;
        this.controlType= options.controlType || '';
    }
}
