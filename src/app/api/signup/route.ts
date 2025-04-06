//@ts-nocheck
import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("body", body);

    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Name, email, and password are required" }, { status: 400 });
    }

    const existingUser = await db.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const newUser = await db.user.create({
      data: {
        name,
        email,
        password, // Note: In a real-world app, hash the password before storing it
      },
    });

    return NextResponse.json({ message: "User created successfully", userId: newUser.id }, { status: 201 });
  } catch (error) {
    console.log("Error creating user:", error);
    return NextResponse.json({ error: "Unable to create user" }, { status: 500 });
  } finally {
    await db.$disconnect();
  }
}