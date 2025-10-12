import { test as base, expect as exp } from "@playwright/test"
import { AccountClient } from "../api/clients/account-client"
import { HomePage } from "../pages/ats/home.page"
import { LoginPage } from "../pages/ats/login.page"
import { RestClient } from "../api/clients/rest-client";
import { UploadPage } from "../pages/atc/upload.page";

type Fixtures = {
    accountClient: AccountClient,
    homePage: HomePage,
    loginPage: LoginPage,
    restClient: RestClient,
    uploadPage: UploadPage
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
    },
    uploadPage: async ({page}, use) => {
        const uploadPage = new UploadPage(page);
        await uploadPage.open();
        await uploadPage.expectLoaded();
        await use(uploadPage);
    },
});

export const setup = base.extend<Fixtures>({
    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.open();
        await loginPage.expectLoaded();
        await use(loginPage);
    }
});

export const expect = exp;