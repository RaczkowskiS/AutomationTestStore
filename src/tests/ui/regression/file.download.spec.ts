import { test, expect } from "@playwright/test"
import fs from "fs/promises";
import path from "path"
 
test('should successfully download file', async ({ page }) => {
    await test.step('Open herokuapp page', async () => {
        await page.goto('https://the-internet.herokuapp.com/download');
    });

    await test.step('Dwonload file', async () => {
        const [download] = await Promise.all([
            page.waitForEvent("download"),
            page.getByRole("link", { name: "some-file.txt" }).click()
        ]);

        const resourcesDir = path.join(process.cwd(), "resources/downloads");
        const filePath = path.join(resourcesDir, download.suggestedFilename());
        await download.saveAs(filePath);

        await expect(fs.access(filePath)).resolves.toBeUndefined();
    });
});