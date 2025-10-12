import { test } from '../../../fixtures/base';
import path from "path";

test('should successfully upload file', async ({ page, uploadPage }) => {
    await test.step('Upload file', async () => {
        const [fileChooser] = await Promise.all([
            page.waitForEvent("filechooser"),
            page.getByRole("button", { name: "Choose File" }).click()
        ]);

        const resourcesDir = path.join(process.cwd(), "resources");
        await fileChooser.setFiles(resourcesDir + "/test.txt");
        await page.getByRole("button", { name: "submit" }).click();
    });
});