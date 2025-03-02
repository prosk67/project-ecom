//@ts-nocheck
import { db } from "prisma/prisma";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name,email, password,role }= body
    const newUser = await db.user.create({
      data: {
        name,
        email,
        password,
        role
      },
    });
    return NextResponse.json({ newUser, message: "User created successfully" }, { status: 201 });
  } catch (error) {
    console.log("Error creating user:", error);
    return NextResponse.json({ error: "Unable to create user" }, { status: 500 });
  }finally{
    await db.$disconnect();
  }
}


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