import type { GenerateTokenResponse } from '../models/token.response'
import { RestClient } from './rest-client';

export class AccountClient {
    public static readonly generateTokenUrl = "/Account/v1/GenerateToken";

    private constructor(private readonly rest: RestClient) {}

    static async create(): Promise<AccountClient> {
        const rest = await RestClient.create();
        return new AccountClient(rest);
    }

    async generateToken(userName: string, password: string): Promise<GenerateTokenResponse> {
        const response = await this.rest.post(
            AccountClient.generateTokenUrl,
            {
                userName: userName,
                password: password
            }
        );

        return await response.json() as GenerateTokenResponse;
    }
}