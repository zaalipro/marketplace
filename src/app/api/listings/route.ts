import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const query = searchParams.get("query");
    const sortBy = searchParams.get("sortBy");

    const listings = await prisma.listing.findMany({
      where: {
        ...(category && { category }),
        ...(query && {
          OR: [
            { title: { contains: query, mode: "insensitive" } },
            { description: { contains: query, mode: "insensitive" } },
          ],
        }),
      },
      include: {
        user: true,
      },
      orderBy: {
        ...(sortBy === 'price-low' && { price: 'asc' }),
        ...(sortBy === 'price-high' && { price: 'desc' }),
        ...(sortBy === 'newest' && { createdAt: 'desc' }),
        ...(sortBy === undefined && { createdAt: 'desc' }),
      },
    });

    return NextResponse.json(listings);
  } catch (error) {
    console.error("Listings error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { title, description, price, category, condition, images } = await request.json();
    const token = request.headers.get("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    // In a real application, you would verify the token here
    // For now, we'll just use a hardcoded user ID
    const userId = "test-user-id"; // This should come from the token verification

    const listing = await prisma.listing.create({
      data: {
        title,
        description,
        price,
        category,
        condition,
        images,
        userId,
      },
    });

    return NextResponse.json(listing);
  } catch (error) {
    console.error("Create listing error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
