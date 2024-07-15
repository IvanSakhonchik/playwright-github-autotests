import { PageProvider } from '@framework/utilities';
import { test } from '@playwright/test';
import BrowserSteps from '@framework/browser/browserSteps';
import Url from '@project/constants/urls';
import { loginPageSteps, mainPageSteps } from '@project/steps';
import * as userData from '@project/testData/users.json';

test.describe('Login Tests', () => {
  test.beforeEach(async ({ page }) => {
    PageProvider.setPage(page);
    await BrowserSteps.navigateTo(Url.LoginPage);
    await loginPageSteps.assertLoginPageIsDisplayed();
  });

  test('Submit login form with valid data', async () => {
    await loginPageSteps.submitLoginForm(userData.validUser.username, userData.validUser.password);
    await mainPageSteps.assertMainPageIsDisplayed();
  });

  test('Submit login form with invalid data', async () => {
    await loginPageSteps.submitLoginForm(userData.invalidUser.username, userData.invalidUser.password);
    await mainPageSteps.assertMainPageIsNotDisplayed();
  });

  test('Submit login form with valid username and invalid password', async () => {
    await loginPageSteps.submitLoginForm(userData.validUser.username, userData.invalidUser.password);
    await mainPageSteps.assertMainPageIsNotDisplayed();
  });

  test('Submit login form with invalid username and valid password', async () => {
    await loginPageSteps.submitLoginForm(userData.invalidUser.username, userData.validUser.password);
    await mainPageSteps.assertMainPageIsNotDisplayed();
  });

  test('Submit login form with empty fields', async () => {
    await loginPageSteps.clickSignIn();
    await loginPageSteps.assertWarningMessageForUsernameFieldIsDisplayed();
    await mainPageSteps.assertMainPageIsNotDisplayed();
  });

  test('Submit login form with empty username', async () => {
    await loginPageSteps.fillPassword(userData.validUser.password)
    await loginPageSteps.clickSignIn();
    await loginPageSteps.assertWarningMessageForUsernameFieldIsDisplayed();
    await mainPageSteps.assertMainPageIsNotDisplayed();
  });

  test('Submit login form with empty password', async () => {
    await loginPageSteps.fillUsername(userData.validUser.username)
    await loginPageSteps.clickSignIn();
    await loginPageSteps.assertWarningMessageForPasswordFieldIsDisplayed();
    await mainPageSteps.assertMainPageIsNotDisplayed();
  });
});
