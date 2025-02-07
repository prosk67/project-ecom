import { db } from "prisma/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("Fetching users from the database...");
    const users = await db.user.findMany();
    console.log("Fetched users:", users);

    if (!users) {
      console.error("No users found");
      return NextResponse.json({ error: "No users found" }, { status: 404 });
    }

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: "Unable to fetch users"}, { status: 500 });
  }
}