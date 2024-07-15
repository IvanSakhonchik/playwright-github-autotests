import { BaseElement } from '@framework/elements';
import { LogUtils } from '@framework/utilities';

/**
 * Class represents an input field web element
 */
class InputField extends BaseElement {
    /**
     * Set a text value to the input field
     * 
     * @param textValue - Text value to be set in the input field
     * @param isHidden - Boolean value whether to hide text value in the logs
     */
    async fill(textValue: string) {
        LogUtils.info(`Type text '${textValue}' into the element '${this.name}'`);
        await this.getElement().fill(textValue);
    }

    /**
     * Clear the input field
     */
    async clear() {
        LogUtils.info(`Clear the element '${this.name}'`);
        await this.getElement().clear();
    }

    /**
     * Get warning message from the input field
     * 
     * @returns Warning message value
     */
    async getWarningMessage(): Promise<string> {
        LogUtils.info(`Get Warning Message from the element '${this.name}'`);
        const validationMessage = await this.getElement().evaluate((element) => {
            const input = element as HTMLInputElement;
            return input.validationMessage;
        });
        return validationMessage;
    }
}

export default InputField;
