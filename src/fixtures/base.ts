import { test as base, expect as exp } from "@playwright/test"
import { AccountClient } from "../api/clients/account-client"
import { HomePage } from "../pages/home.page"
import { LoginPage } from "../pages/login.page"
import { RestClient } from "../api/clients/rest-client";

type Fixtures = {
    accountClient: AccountClient,
    homePage: HomePage,
    loginPage: LoginPage,
    restClient: RestClient
};

export const test = base.extend<Fixtures>({
    accountClient: async ({}, use) => {
        await use(await AccountClient.create());
    },
    homePage: async ({page}, use) => {
        await use(new HomePage(page));
    },
    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.open();
        await loginPage.expectLoaded();
        await use(loginPage);
    },
    restClient: async ({}, use) => {
        await use(await RestClient.create());
    }
});

export const expect = exp;