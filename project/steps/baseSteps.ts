import { LogUtils } from '@framework/utilities';
import { expect } from '@playwright/test';

abstract class BaseSteps {
    async assertWarningMessageFieldIsDisplayed(getWarningMessage: () => Promise<string>, expectedMessage: string) {
        LogUtils.info('UI: assert warning message is displayed');
        expect(await getWarningMessage(), 'Warning message was expected to be displayed').toStrictEqual(expectedMessage);
    }
}

export default BaseSteps;
