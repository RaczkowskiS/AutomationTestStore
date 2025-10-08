import { test, expect } from '@playwright/test';
import { AccountClient } from '../../api/clients/account-client';
import { RestClient } from '../../api/clients/rest-client';
import { users } from '../../testdata/users'

test('should generate token for existing user', async () => {
    const restClient = await RestClient.create();
    const requestBody =
        {
            userName: users.user1.userName,
            password: users.user1.password
        }
    const response = await restClient.post(AccountClient.generateTokenUrl, requestBody);
    const body = await response.json() as {
        token?: string;
        expires?: string;
        status?: string;
        result?: string;
    };
  
    expect(response.ok()).toBeTruthy();
    expect(body.status).toBe("Success");
});

test('should return status failed for not existing user', async () => {
    const restClient = await RestClient.create();
    const requestBody =
        {
            userName: "fake-user",
            password: users.user1.password
        }
    const response = await restClient.post(AccountClient.generateTokenUrl, requestBody);
    const body = await response.json() as {
        token?: string;
        expires?: string;
        status?: string;
        result?: string;
    };
  
    expect(response.ok()).toBeTruthy();
    expect(body.status).toBe("Failed");
});

test('should return token model for existing user', async () => {
    const accountClient = await AccountClient.create();
    const user = users.user1;
    const tokenResponse = await accountClient.generateToken(user.userName, user.password);
  
    expect(tokenResponse.status).toBe("Success");
});