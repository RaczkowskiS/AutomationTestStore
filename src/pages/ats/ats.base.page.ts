import { BasePage } from '../base.page';
import { url } from '../../testdata/url'

export class AtsBasePage extends BasePage {
    
    async open(path: string = '/'): Promise<void> {
        await super.open(url.ats_base_url, path);
    }

}