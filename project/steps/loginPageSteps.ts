import { expect } from '@playwright/test';
import { LogUtils } from '@framework/utilities';
import { loginPage } from '@project/pages';
import { warningMessages } from '@project/constants/warningMessages';
import BaseSteps from './baseSteps';

class LoginPageSteps extends BaseSteps {
    async submitLoginForm(username: string, password: string) {
        LogUtils.info('UI: submit login form');
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickSignIn();
    }

    async fillUsername(username: string) {
        LogUtils.info('UI: fill username in the login form');
        await loginPage.fillUsername(username);
    }

    async fillPassword(password: string) {
        LogUtils.info('UI: fill password in the login form');
        await loginPage.fillPassword(password);
    }

    async clickSignIn() {
        LogUtils.info('UI: click "sign in" in the login form');
        await loginPage.clickSignInButton();
    }

    async assertLoginPageIsDisplayed() {
        LogUtils.info('UI: assert login page is displayed');
        expect(await loginPage.isDisplayed(), 'Blog page was expected to be displayed').toBeTruthy();
    }

    async assertWarningMessageForPasswordFieldIsDisplayed() {
        this.assertWarningMessageFieldIsDisplayed(() => loginPage.getPasswordWarningMessage(), warningMessages.LoginField);
    }

    async assertWarningMessageForUsernameFieldIsDisplayed() {
        this.assertWarningMessageFieldIsDisplayed(() => loginPage.getUsernameWarningMessage(), warningMessages.LoginField);
    }
}

export default new LoginPageSteps();
