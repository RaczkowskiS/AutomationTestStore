import { request as pwRequest, type APIRequestContext, type APIResponse } from '@playwright/test';

export class RestClient {
    private constructor(private readonly client: APIRequestContext) {}

    static async create(baseURL = process.env.API_BASE_URL): Promise<RestClient> {
        const ctx = await pwRequest.newContext({ baseURL });
        return new RestClient(ctx);
    }

    async post(path: string, body: any): Promise<APIResponse> {
        const response = await this.client.post(path, {data: body});
        return response;
    }
}