import { expect } from '@playwright/test';
import { LogUtils } from '@framework/utilities';
import { mainPage } from '@project/pages';

class MainPageSteps {
    async assertMainPageIsDisplayed() {
        LogUtils.info('UI: assert main page is displayed');
        expect(await mainPage.isDisplayed(), 'Main page was expected to be displayed').toBeTruthy();
    }

    async assertMainPageIsNotDisplayed() {
        LogUtils.info('UI: assert main page is not displayed');
        expect(await mainPage.isDisplayed(), 'Main page was expected to be displayed').toBeFalsy();
    }
}

export default new MainPageSteps();
