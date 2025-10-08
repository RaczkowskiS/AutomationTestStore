import { RestClient } from './RestClient';

export class AccountClient {
    private constructor(private readonly rest: RestClient) {}

    static async create(): Promise<AccountClient> {
        const rest = await RestClient.create();
        return new AccountClient(rest);
    }

    async generateToken(userName: string, password: string) {
        return await this.rest.post(
            "/Account/v1/GenerateToken",
            {
                userName: userName,
                password: password
            }
        );
    }
}