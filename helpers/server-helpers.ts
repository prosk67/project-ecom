import  { db } from "@/lib/prisma";

export const connectToDatabase = async () => {
  try {
    console.log("Connecting to the database...");
    await db.$connect();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}