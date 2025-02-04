import { $ } from '@wdio/globals'
import Page from './page.js';

class DynamicLoadingPage extends Page {

    get btnStart () {
        return $('button');
    }

    get finalText () {
        return $('div[id=finish]');
    }

    async clickBtnStart () {
        await this.btnStart.click();

    }

    open () {
        return super.open('dynamic_loading/1');
    }
}

export default new DynamicLoadingPage();