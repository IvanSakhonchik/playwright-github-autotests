import { Locator } from '@playwright/test';
import { LogUtils, PageProvider } from '@framework/utilities';
import Timeout from '@framework/config/timeoutConfig';
import { State } from '@framework/elements';

/**
 * Class represents a base web element
 */
abstract class BaseElement {
    protected readonly selector: string;
    protected readonly name: string;

    /**
     * Create a web element
     * 
     * @param selector - Web element selector
     * @param name - Weblement name
     */
    constructor(selector: string, name: string) {
        this.selector = selector;
        this.name = name;
    }

    /**
     * Get the web element
     * 
     * @returns Web element
     */
    protected getElement(): Locator {
        return PageProvider.getPage().locator(this.selector);
    }

    /**
     * Click on the web element
     */
    async click() {
        LogUtils.info(`Click on the element '${this.name}'`);
        await this.getElement().click();
    }

    /**
     * Get text from the web element
     * 
     * @returns Web element text
     */
    getText(): Promise<string> {
        LogUtils.info(`Get text from element '${this.name}'`);
        return this.getElement().innerText();
    }

    /**
     * Check whether the web element is displayed
     * 
     * @param timeout - Maximum time in milliseconds. Default is 5000 milliseconds
     * @returns Boolean value (true/false) indicating whether the web element is displayed
     */
    async isDisplayed(timeout: number = Timeout.Medium): Promise<boolean> {
        LogUtils.info(`Check if element '${this.name}' is displayed`);
        try {
            await this.waitToBeDisplayed(timeout);
            LogUtils.info(`Element '${this.name}' is displayed`);
            return true;
        } catch {
            LogUtils.warn(`Element '${this.name}' is not displayed`);
            return false;
        }
    }

    /**
     * Wait for the web element to become displayed
     * 
     * @param timeout - Maximum time in milliseconds. Default is 5000 milliseconds
     */
    async waitToBeDisplayed(timeout: number = Timeout.Medium) {
        LogUtils.info(`Waiting ${timeout} milliseconds for element '${this.name}' to be displayed`);
        await this.getElement().waitFor({ state: State.Visible, timeout });
    }
}

export default BaseElement;
