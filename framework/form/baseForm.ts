import { LogUtils } from '@framework/utilities';
import BaseElement from '@framework/elements/baseElement';

/**
 * Class represents a base web form
 */
abstract class BaseForm {
    protected readonly uniqueElement: BaseElement;
    protected readonly name: string;

    /**
     * Create a web form
     * 
     * @param selector - Web form unique element
     * @param name - Web form name
     */
    constructor(uniqueElement: BaseElement, name: string) {
        this.uniqueElement = uniqueElement;
        this.name = name;
    }

    /**
     * Check whether the web form is displayed
     * 
     * @param timeout - Maximum time in milliseconds. Default is 5000 milliseconds
     * @returns Boolean value (true/false) indicating whether the web form is displayed
     */
    isDisplayed(timeout?: number): Promise<boolean> {
        LogUtils.info(`Checking if '${this.name}' is displayed`);
        return this.uniqueElement.isDisplayed(timeout);
    }
}

export default BaseForm;
