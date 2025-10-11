import { test } from '../../fixtures/base';
import path from "path";

test('should successfully upload file', async ({ page, uploadPage }) => {
    const fileChoosePromise = page.waitForEvent("filechooser");
    
    await page.getByRole("button", { name: "Choose File" }).click();
    const fileChooser = await fileChoosePromise;
    await fileChooser.setFiles(path.resolve(__dirname) + "\\..\\..\\resources\\test.txt");
    await page.getByRole("button", { name: "submit" }).click();
});