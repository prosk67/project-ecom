//@ts-nocheck
import { db } from "prisma/prisma";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    console.log("Fetching users from the database...");
    const products = await db.product.findMany({

        include: {
            images: true
          }

    }
    );
    console.log("Fetched users:", products);

    if (!products) {
      console.error("No users found");
      return NextResponse.json({ error: "No users found" }, { status: 404 });
    }

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: "Unable to fetch users"}, { status: 500 });
  }
}