import BaseForm from '@framework/form/baseForm';
import { ElementFactory } from '@framework/elements';

class LoginPage extends BaseForm {
    private static readonly loginLabel = ElementFactory.getLabel('#login', 'Login label');
    private readonly usernameInputField = ElementFactory.getInputField('#login_field[required]', 'Username input field');
    private readonly passwordInputField = ElementFactory.getInputField('#password[required]', 'Password input field');
    private readonly signInButton = ElementFactory.getButton('//input[@name="commit"]', 'Sign In button');

    constructor() {
        super(LoginPage.loginLabel, 'Login page');
    }

    async fillUsername(usernameText: string) {
        await this.usernameInputField.fill(usernameText);
    }

    async fillPassword(passwordText: string) {
        await this.passwordInputField.fill(passwordText);
    }

    async clickSignInButton() {
        await this.signInButton.click();
    }

    getPasswordWarningMessage(): Promise<string> {
        return this.passwordInputField.getWarningMessage();
    }

    getUsernameWarningMessage(): Promise<string> {
        return this.usernameInputField.getWarningMessage();
    }
}

export default new LoginPage();
