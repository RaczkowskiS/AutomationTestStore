import { request as pwRequest, type APIRequestContext, type APIResponse } from '@playwright/test';
import { url } from '../../testdata/url'

export class RestClient {
    private constructor(private readonly client: APIRequestContext) {}

    static async create(baseURL = url.api_base_url): Promise<RestClient> {
        const ctx = await pwRequest.newContext({ baseURL });
        return new RestClient(ctx);
    }

    async post(path: string, body: any): Promise<APIResponse> {
        const response = await this.client.post(path, {data: body});
        return response;
    }
}