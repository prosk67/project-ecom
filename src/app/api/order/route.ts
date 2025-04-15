//@ts-nocheck
import { NextResponse } from "next/server";
import { db } from "@/lib/prisma"; // Assuming Prisma is set up for database access

export async function POST(req: Request) {
  try {
    const { userId, items } = await req.json();
    console.log("Received request to create order:", { userId, items });

    if (!userId ) {
      return NextResponse.json(
        { error: "Invalid request. User ID and items are required." },
        { status: 400 }
      );
    }

    // Validate items structure
    const invalidItem = items.find(
      (item) => !item.productId || !item.quantity || !item.price
    );
    if (invalidItem) {
      return NextResponse.json(
        { error: "Invalid item structure in the request." },
        { status: 400 }
      );
    }

    // Calculate total amount
    const totalAmount = items.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );

    // Create the order
    const order = await db.order.create({
      data: {
        userId,
        totalAmount,
        status: "PENDING",
        items: {
          create: items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      include: {
        items: true,
      },
    });

    // Clear the cart for the user
    await db.cartItem.deleteMany({
      where: { userId },
    });

    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { error: "Failed to create order. Please try again." },
      { status: 500 }
    );
  }
}
