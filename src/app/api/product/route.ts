//@ts-nocheck
import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    console.log("Fetching products from the database...");

    // Extract category names from the request URL
    const url = new URL(request.url);
    const categoryNames = url.searchParams.get("category")?.split(",") || [];
    const minPrice = parseInt(url.searchParams.get("minPrice") || "100");
    const maxPrice = parseInt(url.searchParams.get("maxPrice") || "5000");
    const sort = url.searchParams.get("sort") || "Newest";
    const stock = url.searchParams.get("stock")?.split(",") || [];

    let orderBy = {};
    switch (sort) {
      case "Price: Low to High":
        orderBy = { price: "asc" };
        break;
      case "Price: High to Low":
        orderBy = { price: "desc" };
        break;
      case "Newest":
      default:
        orderBy = { createdAt: "desc" };
        break;
    }

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
      orderBy,
    };

    if (categoryNames[0] != "") {
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

    if (stock[0] === "In") {
      query.where.stock = {
        gt: 0,
      };
    } else if (stock[0] === "Out") {
      query.where.stock = {
        equals: 0,
      };
    }

    // Execute the query

    console.log(categoryNames);

    const products = await db.product.findMany(query);
    console.log("Fetched products:", products);
    // Return the products
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Unable to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, price, description, categoryId, stock, images } = body;

    if (!name || !price || !categoryId || !images || images.length === 0) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const product = await db.product.create({
      data: {
        name,
        description,
        price,
        categoryId,
        stock: stock || 0,
        images: {
          create: images.map((url: string) => ({ url })),
        },
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Unable to create product" },
      { status: 500 }
    );
  }
}
