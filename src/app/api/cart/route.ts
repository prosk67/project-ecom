//@ts-nocheck
import { db } from "prisma/prisma";
import { NextResponse } from "next/server";



export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("body", body);
    
    const { userId, productId, quantity }= body
    if(!userId || !productId || !quantity){
      return NextResponse.json({ error: "userId, productId and quantity are required" }, { status: 400 });
    }
    const newItem = await db.cartItem.create({
      data: {
        userId,
        productId,
        quantity,
      },
    });
    if(!newItem){
      return NextResponse.json({ error: "Unable to add item to cart" }, { status: 500 });
     

    }
    return NextResponse.json({ newItem, message: "Item created successfully" }, { status: 200 });
  } catch (error) {
    console.log("Error creating user:", error);
    return NextResponse.json({ error: "Unable to create cart item" }, { status: 500 });
  }finally{
    await db.$disconnect();
  }
}