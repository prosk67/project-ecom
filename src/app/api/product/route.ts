//@ts-nocheck
import { db } from "prisma/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    console.log("Fetching products from the database...");

    // Extract category names from the request URL
    const url = new URL(request.url);
    const categoryNames = url.searchParams.get("category")?.split(",") || [];
    const minPrice = parseInt(url.searchParams.get("minPrice") || "100");
    const maxPrice = parseInt(url.searchParams.get("maxPrice") || "5000");
    let query: any = {
      where: {
        price: {
          gte: minPrice,
          lte: maxPrice,
        },
      },
      include: {
        images: true,
        category: true,
      },
    };

    if (categoryNames[0] != '') {
      // Fetch category IDs based on category names
      const categories = await db.category.findMany({
        where: {
          name: {
            in: categoryNames,
          },
        },
        select: {
          id: true,
        },
      });

      const categoryIds = categories.map((category) => category.id);

      // Add category filter if categoryIds are provided
      query.where = {
        categoryId: {
          in: categoryIds,

        },
        price: {
          gte: minPrice,
          lte: maxPrice,
        },
      };
    }
    // Execute the query
    
    console.log(categoryNames)
    
    const products = await db.product.findMany(query);
    console.log("Fetched products:", products);
    // Return the products
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Unable to fetch products" }, { status: 500 });
  }
}