import { $ } from '@wdio/globals'
import Page from './page.js';
import path from 'node:path'

class FileUploadPage extends Page {

    get input() {
        return $('#file-upload');
    }

    get btnSubmit() {
        return $('#file-submit');
    }

    get finalText() {
        return $('h3');
    }

    get fileName() {
        return $('#uploaded-files');
    }

    async uploadFile() {
        const filePath = path.join(process.cwd(), 'test/data/sample.txt');
        const remoteFilePath = await browser.uploadFile(filePath);

        await this.input.setValue(remoteFilePath);
        await this.btnSubmit.click();
    }

    open() {
        return super.open('upload');
    }
}

export default new FileUploadPage();