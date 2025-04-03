//@ts-nocheck
import { db } from "prisma/prisma";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
    try {
      const { userId } = await req.json(); // Extract userId from the request body
        

      const cartItems = await prisma.cartItem.findMany(
        {
            where: {
                userId: userId, // Filter cart items by userId
              },
              include: {
                product: {
                  include: {
                    images: {
                      select: {
                        url: true, // Include only the image URL field from the image table
                      },
                    },
                  },
                },
              },
        }
      ); // Fetch all cart items from the database

      console.log("cartItems", cartItems);
      return NextResponse.json(cartItems);
    } catch (error) {
      return NextResponse.json({ error: "Failed to fetch cart items." }, { status: 500 });
    }
  }
