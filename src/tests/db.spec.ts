import { test, expect } from "@playwright/test"
import { connectToDatabase } from "../infrastructure/db"

test("database connection test", async({}) => {
    await connectToDatabase();
});