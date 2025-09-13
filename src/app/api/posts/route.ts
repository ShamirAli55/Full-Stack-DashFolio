import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (_request: NextRequest) => {
  try {
    await connect();

    const posts = await Post.find();

    return NextResponse.json(posts, { status: 200 });
  } catch (err: unknown) {
    console.error("Database Error:", err);
    return new NextResponse(
      JSON.stringify({ error: "Database Error", details: String(err) }),
      { status: 500 }
    );
  }
};
