//@ts-nocheck
import { db } from "prisma/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, productId, quantity } = body;

    if (!userId || !productId || !quantity) {
      return NextResponse.json(
        { error: "userId, productId, and quantity are required" },
        { status: 400 }
      );
    }

    const newItem = await db.cartItem.create({
      data: {
        userId,
        productId,
        quantity,
      },
    });

    if (!newItem) {
      return NextResponse.json(
        { error: "Unable to add item to cart" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { newItem, message: "Item created successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error creating cart item:", error);
    return NextResponse.json(
      { error: "Unable to create cart item" },
      { status: 500 }
    );
  } finally {
    await db.$disconnect();
  }
}

// PUT: Update the quantity of a cart item
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, action } = body;

    if (!id || !action) {
      return NextResponse.json(
        { error: "id and action are required" },
        { status: 400 }
      );
    }

    const cartItem = await db.cartItem.findUnique({
      where: { id },
    });

    if (!cartItem) {
      return NextResponse.json(
        { error: "Cart item not found" },
        { status: 404 }
      );
    }

    let updatedQuantity = cartItem.quantity;

    if (action === "increase") {
      updatedQuantity += 1;
    } else if (action === "decrease" && cartItem.quantity > 1) {
      updatedQuantity -= 1;
    } else {
      return NextResponse.json(
        { error: "Invalid action or quantity cannot be less than 1" },
        { status: 400 }
      );
    }

    const updatedItem = await db.cartItem.update({
      where: { id },
      data: { quantity: updatedQuantity },
    });

    return NextResponse.json(
      { updatedItem, message: "Quantity updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error updating cart item:", error);
    return NextResponse.json(
      { error: "Unable to update cart item" },
      { status: 500 }
    );
  } finally {
    await db.$disconnect();
  }
}

// DELETE: Remove an item from the cart
export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json(
        { error: "id is required" },
        { status: 400 }
      );
    }

    const deletedItem = await db.cartItem.delete({
      where: { id },
    });

    return NextResponse.json(
      { deletedItem, message: "Item removed from cart successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error removing cart item:", error);
    return NextResponse.json(
      { error: "Unable to remove cart item" },
      { status: 500 }
    );
  } finally {
    await db.$disconnect();
  }
}