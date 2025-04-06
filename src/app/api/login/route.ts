//@ts-nocheck
import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("body", body);
    
    const { email ,password }= body
    if(!password){
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }
    const newUser = await db.user.findUnique({where:{email}});
    if(newUser.email === email && newUser.password === password){
      return NextResponse.json({ message: "Login Successful",userId: newUser.id }, { status: 200 });

    }
    return NextResponse.json({ newUser, message: "User created successfully" }, { status: 201 });
  } catch (error) {
    console.log("Error creating user:", error);
    return NextResponse.json({ error: "Unable to create user" }, { status: 500 });
  }finally{
    await db.$disconnect();
  }
}