import { LogUtils, PageProvider } from '@framework/utilities';

/**
 * Class with steps for interaction with the browser
 */
class BrowserSteps {
    /**
     * Navigate to the specified url
     * 
     * @param url - URL value
     */
    static async navigateTo(url: string) {
        LogUtils.info(`BROWSER: navigate to ${url}`);
        await PageProvider.getPage().goto(url);
    }
}

export default BrowserSteps;
