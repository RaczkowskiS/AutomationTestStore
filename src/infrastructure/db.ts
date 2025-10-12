import { Client } from "pg"

const client = new Client({
  host: "playwright-db.canam4uku4ju.us-east-1.rds.amazonaws.com",
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: 5432,
  ssl: { rejectUnauthorized: false }
});

export async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to the database");
    } catch (error) {
        console.error("Error connection to the db", error);
    } finally {
        await client.end();
        console.log("Db connection closed");
    }
}