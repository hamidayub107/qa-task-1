import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('Login Test Suite', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    });
    it('should validate error message for incorrect credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('test', 'test')
        await expect(LoginPage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('Your username is invalid!'))
    });
})