import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

interface Params {
  params: {
    id: string;
  };
}

export const GET = async (_req: NextRequest, { params }: Params) => {
  const { id } = params;

  try {
    await connect();

    const post = await Post.findById(id);

    if (!post) {
      return new NextResponse(
        JSON.stringify({ error: "Post not found" }),
        { status: 404 }
      );
    }

    return NextResponse.json(post, { status: 200 });
  } catch (err: unknown) {
    console.error("Database Error:", err);
    return new NextResponse(
      JSON.stringify({ error: "Database Error", details: String(err) }),
      { status: 500 }
    );
  }
};

export const DELETE = async (_req: NextRequest, { params }: Params) => {
  const { id } = params;

  try {
    await connect();

    const deleted = await Post.findByIdAndDelete(id);

    if (!deleted) {
      return new NextResponse(
        JSON.stringify({ error: "Post not found" }),
        { status: 404 }
      );
    }

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err: unknown) {
    console.error("Database Error:", err);
    return new NextResponse(
      JSON.stringify({ error: "Database Error", details: String(err) }),
      { status: 500 }
    );
  }
};
