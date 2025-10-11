import { test, expect } from "@playwright/test"
import fs from "fs/promises";
import path from "path"
 
test('should successfully download file', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/download');
    const downloadPromise = page.waitForEvent("download");
    await page.getByRole("link", { name: "testing_edge.docx" }).click();
    const download = await downloadPromise;

    const resourcesDir = path.join(process.cwd(), "resources/downloads");
    const filePath = path.join(resourcesDir, download.suggestedFilename());
    await download.saveAs(filePath);

    await expect(fs.access(filePath)).resolves.toBeUndefined();
});