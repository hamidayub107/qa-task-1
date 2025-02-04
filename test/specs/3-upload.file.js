import { expect } from '@wdio/globals'
import FileUploadPagePage from '../pageobjects/file_upload.page.js'

describe('Upload File Test Suite', () => {
    it('should upload a file successfully', async () => {
        await FileUploadPagePage.open();

        await FileUploadPagePage.uploadFile();

        await expect(FileUploadPagePage.finalText).toBeExisting()
        await expect(FileUploadPagePage.finalText).toHaveText(
            expect.stringContaining('File Uploaded!'))
        await expect(FileUploadPagePage.fileName).toBeExisting()
        await expect(FileUploadPagePage.fileName).toHaveText(
            expect.stringContaining('sample.txt'))
    })
})