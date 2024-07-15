import { Button, Label, InputField } from '@framework/elements';

/**
 * Class represents the element factory for web elements creation
 */
class ElementFactory {
    static getButton(selector: string, name: string): Button {
        return new Button(selector, name,);
    }

    static getLabel(selector: string, name: string): Label {
        return new Label(selector, name);
    }

    static getInputField(selector: string, name: string): InputField {
        return new InputField(selector, name);
    }
}

export default ElementFactory;
