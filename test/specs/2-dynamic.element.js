import { expect } from '@wdio/globals'
import DynamicLoadingPage from '../pageobjects/dynamic_loading.page.js'

describe('Dynamic Element Test Suite', () => {
    it('should validate dynamic element', async () => {
        await DynamicLoadingPage.open()

        await DynamicLoadingPage.clickBtnStart()
        await expect(DynamicLoadingPage.finalText).toBeExisting()
        await expect(DynamicLoadingPage.finalText).toHaveText(
            expect.stringContaining('Hello World!'))
    });
})