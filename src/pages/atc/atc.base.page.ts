import { BasePage } from '../base.page';
import { url } from '../../testdata/url'

export class AtcBasePage extends BasePage {
    
    async open(path: string = '/'): Promise<void> {
        await super.open(url.atc_base_url, path);
    }

}