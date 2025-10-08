import { test, expect } from '@playwright/test';
import { AccountClient } from '../../api/AccountClient';
import { users } from '../../testdata/users'

test('should generate token for existing user', async () => {
    const accountClient = await AccountClient.create();
    const user = users.user1
    const res = await accountClient.generateToken(user.userName, user.password);
    const body = await res.json() as {
        token?: string;
        expires?: string;
        status?: string;
        result?: string;
    };
  
    expect(res.ok()).toBeTruthy();
    expect(body.status).toBe("Success");
});